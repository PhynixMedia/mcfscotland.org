<?php


/**
 *
 */
function recently_viewed_items(){

    return 'recently_viewed_items';
}

/**
 * this is cart helper functions
 */
function cartValue($key){

//    dd(cart("cart"));

//    clear_seesion();

    $value = $count = 0;
    if(session()->has($key))
    {
        if($carts = session()->get($key)){

            if(is_string($carts)){
                $carts = json_decode($carts);
            }

            foreach($carts as $index => $cart){
                if(is_object($cart)){ $cart = (array) $cart; }
                $value += ((float)$cart['price']* (float)$cart['qty']);
                $count += 1;
            }
        }
    }

    return (object) ['count'=>$count, 'value'=>number_format((float)$value, 2, '.', '')];
}

function cart($key){

    $carts = session()->get($key) ?? "{}";
    
    if(is_string($carts)){
        $carts = json_decode($carts);
    }

    return $carts ?? [];
}

function currency()
{
    return '£';
}

/**
 * Calculate and return monitary value
 */

function _money($value)
{
    return number_format((float)$value, 2, '.', '');
}

/**
 * This should return the discount value of coupon code
 */
function cart_discount()
{
    try{
        $amount = 0;

        if($discounts = session()->get('discounts')??''){

            foreach($discounts as $discount)
            {
                $amount += $discount->value??0;
            }
        }

        return money($amount);

    }catch(\Exception $e){
        return 0.00;
    }
}

// Get checkout items from cart
function cart_checkout_items()
{
    $items = [];
    if($carts = session()->get('cart')??''){
        foreach($carts as $index => $cart)
        {
            if(is_object($cart)){ $cart = (array) $cart; }
            $items[] =  [
                'product_id' => $cart['product_id'],
                'size_id' => $cart['size_id'],
                'quantity' => $cart['qty'],
                'unit' => 'kg',
                'price' => $cart['price'],
                'deal_id' => 0,
                'status' => 1,
            ];
        }
    }
    return $items;
}

function cart_checkout()
{
    $data = session()->get('checkout_form_data')??'';
    return $data;
}

/**
 * Calculate sub Total and return monetary value and the weight
 */
function total()
{

    // clear_seesion();

    $total = [
        "total"     => 0,
        "weight"    => 0,
        "shipping"  => 0
    ];

    try{

        if($carts = cart('cart'))
        {

            foreach($carts as $index => $cart)
            {
                if(is_object($cart)){ $cart = (array) $cart; }
                $total['total'] += (float)($cart['qty'] * (float)($cart['price']));
                $total['weight'] += ((float)$cart['qty'] * (float)$cart['size']);
                // $total['weight'] += ((float)$cart['qty'] * (float)$cart['size_in_kg']);
            }

            $total['shipping'] = shippingWeight($total['weight']);
        }
        return (object)$total;

    }catch(\Exception $e){
        // throw exception of die
        return (object) $total;
    }
}





function shipping( $weight )
{
    $shipping = env('APP_SHIPPING_CHARGE');

    // if weight is less than or equals to 30 but greater than 0
    if($weight <= 30 && $weight > 0){
        $shipping = "6.99";
    }

    if($weight > 30){
        $shipping = "12.99";
    }

    return $shipping;
}

function shippingWeight( $weight )
{
    $shipping = env('APP_SHIPPING_CHARGE');

    // if weight is less than or equals to 30 but greater than 0
    if($weight <= 30 && $weight > 0){
        $shipping = "6.99";
    }

    if($weight > 30){
        $shipping = "12.99";
    }

    return $shipping;
}



function delivery_charge(){

    try
    {
        $total = (array)total();
        $order_total = (object) $total;

        $shipping = $order_total->shipping;

        if(env('APP_DELIVERY_DISCOUNTED'))
        {
            $shipping = $order_total->shipping / 2;
        }

        return $shipping;

    }catch(\Exception $e){
        return 0;
    }
}

function clean_number($string)
{
    return preg_replace('~[^A-Za-z\.\d\s-]+~u', '', $string);
}

/**
 * -----------------------  CHECKOUT HELPERS ----------------- */

function _final_charge(float $discount = 0)
{
    $total = money((float) total()->total??0) ;

    $shipping_charge = ((float) total()->shipping ?? 0);

    return ( $total += ($shipping_charge - $discount) ) - cart_discount();
}

function _shipping_discount(float $value, bool $is_percent = true): float
{
    $shipping_charge = total()->shipping ?? 0;

    if($is_percent)
    {
        return ($shipping_charge * $value) / 100;
    }

    return $shipping_charge - $value;
}

function _shipping_estimate(): string
{
    $weight = total()->weight ?? 0;
    $charge = money(total()->shipping??0);

    $shipping = env('APP_SHIPPING_WEIGHT') ? $weight . 'kg = £' . $charge : '£' . $charge;

    return $shipping;
}

/**
 * @return object|null
 */
function _voucher(): ?object
{
    $voucher = session()->get('voucher');

    $voucher = (object) $voucher;

    return $voucher;
}

/**
 * @return int
 */
function get_options_delivery(){

    return session()->get(env('APP_CART_DELIVERY_OPTION_MODE')) ? 1 : 0;
}

function is_pickup_mode() {

    if(get_options_delivery() == 0){
        return false;
    }

    return true;
}

/**
 * This mewrge the functionality of option deliver with default charge
 */
function set_options_shipping($option){

    session()->put(env('APP_CART_DELIVERY_OPTION'), $option);
}

function get_option_shipping(){

    $delivery_charge = (float) delivery_charge();

    $option = session()->get(env('APP_CART_DELIVERY_OPTION')) ?? 0;

    switch($option){
        case 2: $delivery_charge = 6.99; break;
        case 3: $delivery_charge = 0.1; break;
        case 1:
        case 0:
            $delivery_charge = total()->shipping ?? 6.99;
            break;
    }

    return $delivery_charge;
}

function clear_seesion(){

    $store_keys = [
        'checkout', 'cart', 'carts', 'delivery_charge','order_code', 'voucher',
        'user', 'checkout_form_data',
        env('APP_CART_DELIVERY_OPTION')
    ];

    foreach($store_keys as $key){

        session()->forget($key);
        session()->save();
    }

}
