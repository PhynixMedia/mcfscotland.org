{{-- Home — static port of the MCF Scotland template (index-4.html) --}}

@extends('web.master')

@section('content')


<!-- banner-area -->
<section id="home" class="banner-area protein-banner slider-area">
    <div class="banner-bg" data-background="{{ asset('assets/img/banner/protein_banner_bg.png') }}"></div>
    <div class="slider-active">
        <div class="single-slider">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-11 order-0 order-lg-2">
                        <div class="banner-img-wrap" data-animation="fadeInRight" data-delay=".4s">
                            <img src="{{ asset('assets/img/banner/protein_banner_img.png') }}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-content">
                            <h6 class="sub-title" data-animation="fadeInUp" data-delay=".2s">Increased Energy With MCF</h6>
                            <h2 data-animation="fadeInUp" data-delay=".4s">Mix Protein Provided Way To Growth</h2>
                            <div class="banner-btn" data-animation="fadeInUp" data-delay=".6s">
                                <a href="{{ url('/shop') }}" class="btn protein-btn">Our Shop <i class="fal fa-arrow-right"></i></a>
                                <a href="{{ url('/contact') }}" class="btn solid-btn">Learn More <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="single-slider">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-11 order-0 order-lg-2">
                        <div class="banner-img-wrap" data-animation="fadeInRight" data-delay=".4s">
                            <img src="{{ asset('assets/img/banner/protein_banner_img02.png') }}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-content">
                            <h6 class="sub-title" data-animation="fadeInUp" data-delay=".2s">Increased Energy With MCF</h6>
                            <h2 data-animation="fadeInUp" data-delay=".4s">Mix Protein Provided Way To Growth</h2>
                            <div class="banner-btn" data-animation="fadeInUp" data-delay=".6s">
                                <a href="{{ url('/shop') }}" class="btn protein-btn">Our Shop <i class="fal fa-arrow-right"></i></a>
                                <a href="{{ url('/contact') }}" class="btn solid-btn">Learn More <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-shape">
        <ul>
            <li data-parallax='{"x" : 100 , "y" : -100 }'><img src="{{ asset('assets/img/banner/protein_banner_shape01.png') }}" alt=""></li>
            <li data-parallax='{"x" : -50 , "y" : 50 , "rotateZ":100}'><img src="{{ asset('assets/img/banner/protein_banner_shape02.png') }}" alt=""></li>
            <li><img src="{{ asset('assets/img/banner/protein_banner_shape03.png') }}" class="rotateme" alt=""></li>
            <li data-parallax='{"x" : 100 , "y" : -100 }'><img src="{{ asset('assets/img/banner/protein_banner_shape04.png') }}" alt=""></li>
            <li data-parallax='{"x" : -100 , "y" : 100 }'><img src="{{ asset('assets/img/banner/protein_banner_shape05.png') }}" alt=""></li>
        </ul>
    </div>
</section>
<!-- banner-area-end -->

<!-- brand-area -->
<div class="brand-area">
    <div class="container">
        <div class="brand-wrap pt-80 pb-80">
            <div class="row brand-active">
                <div class="col-lg-3">
                    <div class="brand-item">
                        <a href="#"><img src="{{ asset('assets/img/brand/s_brand_logo01.png') }}" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item">
                        <a href="#"><img src="{{ asset('assets/img/brand/s_brand_logo02.png') }}" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item">
                        <a href="#"><img src="{{ asset('assets/img/brand/s_brand_logo03.png') }}" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item">
                        <a href="#"><img src="{{ asset('assets/img/brand/s_brand_logo04.png') }}" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item">
                        <a href="#"><img src="{{ asset('assets/img/brand/s_brand_logo05.png') }}" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="brand-item">
                        <a href="#"><img src="{{ asset('assets/img/brand/s_brand_logo06.png') }}" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- brand-area-end -->

<!-- features-area -->
<section id="features" class="features-area protein-features pt-120 pb-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Features</div>
                    <h6 class="sub-title">Increased Energy With MCF</h6>
                    <h2 class="title">Product Features</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">01</div>
                    <div class="features-icon mb-25">
                        <img src="{{ asset('assets/img/icon/features_icon01.png') }}" alt="">
                    </div>
                    <div class="features-content">
                        <h3>Increased Energy</h3>
                        <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center active mb-30">
                    <div class="features-count">02</div>
                    <div class="features-icon mb-25">
                        <img src="{{ asset('assets/img/icon/features_icon02.png') }}" alt="">
                    </div>
                    <div class="features-content">
                        <h3>Health & Well Being</h3>
                        <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">03</div>
                    <div class="features-icon mb-25">
                        <img src="{{ asset('assets/img/icon/features_icon03.png') }}" alt="">
                    </div>
                    <div class="features-content">
                        <h3>Energy Grow Up</h3>
                        <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">04</div>
                    <div class="features-icon mb-25">
                        <img src="{{ asset('assets/img/icon/features_icon04.png') }}" alt="">
                    </div>
                    <div class="features-content">
                        <h3>Calorie Build Up</h3>
                        <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">05</div>
                    <div class="features-icon mb-25">
                        <img src="{{ asset('assets/img/icon/features_icon05.png') }}" alt="">
                    </div>
                    <div class="features-content">
                        <h3>Regular Routine</h3>
                        <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">06</div>
                    <div class="features-icon mb-25">
                        <img src="{{ asset('assets/img/icon/features_icon06.png') }}" alt="">
                    </div>
                    <div class="features-content">
                        <h3>Diet Towards</h3>
                        <p>A dietary supplement is a manufacture product intended to supplement the diet when taken by mouth.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- features-area-end -->

<!-- choose-area -->
<section id="ingredient" class="choose-area protein-choose position-relative pt-120 pb-120">
    <div class="choose-bg"></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div class="choose-content">
                    <div class="section-title protein-title mb-20">
                        <h6 class="sub-title">Why Choose Us</h6>
                        <h2 class="title">Why Choose Our Best Product<span>.</span></h2>
                    </div>
                    <p>Biden’s staff to view detailed classified information, send representatives to embed with government agencies and have the State Department facilitate calls with foreign leaders. The delay could also hamper Mr. Biden’s selection of cabinet officials because the ability to conduct background investigations for security clearances is frozen.</p>
                    <a href="{{ url('/contact') }}" class="btn transparent-btn pt-transparent">Learn More <i class="fal fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-xl-5 col-lg-6">
                <div class="position-relative">
                    <div class="choose-list-wrap">
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-protein-supplement"></i>
                                </div>
                                <div class="content">
                                    <h4>Multi Fruits Flavour</h4>
                                    <p>A thing added to something else in order to complete or enhance it.</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-supplementary-food"></i>
                                </div>
                                <div class="content">
                                    <h4>Flower Formula</h4>
                                    <p>A thing added to something else in order to complete or enhance it.</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-vitamins"></i>
                                </div>
                                <div class="content">
                                    <h4>Fishbone Diagram</h4>
                                    <p>A thing added to something else in order to complete or enhance it.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="choose-img">
                        <img class="main-img" src="{{ asset('assets/img/images/choose_img.png') }}" alt="">
                        <img class="shape" src="{{ asset('assets/img/images/choose_img_shape.png') }}" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- choose-area-end -->

<!-- video-area -->
<section class="video-area protein-video black-bg fix pt-120">
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-5">
                <div class="video-content">
                    <div class="section-title protein-title white-title mb-35">
                        <h6 class="sub-title">Intro Video</h6>
                        <h2 class="title">Nutrition for Every Life<span>.</span></h2>
                    </div>
                    <p>Biden’s staff to view detailed classified information, send representatives to embed with government agencies and
                    have the State Department facilitate calls with foreign leaders.</p>
                    <div class="slider-nav"></div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-7">
                <div class="video-active">
                    <div class="video-item">
                        <img src="{{ asset('assets/img/images/video_img01.png') }}" alt="">
                        <a href="https://www.youtube.com/watch?v=vkNcyKbRgqY" class="popup-video ripple-white"><i class="fas fa-play"></i></a>
                    </div>
                    <div class="video-item">
                        <img src="{{ asset('assets/img/images/video_img02.png') }}" alt="">
                        <a href="https://www.youtube.com/watch?v=vkNcyKbRgqY" class="popup-video ripple-white"><i class="fas fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- video-area-end -->

<!-- gallery-area -->
<section id="gallery" class="gallery-area protein-gallery pt-120">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Showcase</div>
                    <h6 class="sub-title">Gallery</h6>
                    <h2 class="title">Product Showcase</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="product-menu">
                    <button class="active" data-filter="*">All Categories</button>
                    <button data-filter=".cat-one">Fruits</button>
                    <button data-filter=".cat-two">Medicine</button>
                    <button data-filter=".cat-three">Zinc</button>
                    <button data-filter=".cat-four">Calcium</button>
                    <button data-filter=".cat-five">Foods</button>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="row gallery-product-active">
                    <div class="col-lg-4 col-sm-6 grid-item cat-two cat-three cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product01.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product01.jpg') }}" class="popup-image" title="Testosterone Boosters"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-four cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product02.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product02.jpg') }}" class="popup-image" title="Libido and Sexual Health"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-two cat-three cat-four">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product03.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product03.jpg') }}" class="popup-image" title="Bone and joint health"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-two cat-three cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product04.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product04.jpg') }}" class="popup-image" title="Women's Health"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-two cat-four cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product05.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product05.jpg') }}" class="popup-image" title="Muscle Gain and Exercise"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-three cat-four">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product06.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product06.jpg') }}" class="popup-image" title="Energy and Stimulation"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- gallery-area-end -->

<!-- fact-area -->
<section class="fact-area pt-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="fact-item fact-item-two mb-30">
                    <div class="chart-two" data-percent="65">
                        <span class="percentage">65<small>%</small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Active Members</h4>
                        <span>Yes we did it asap software</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="fact-item fact-item-two mb-30">
                    <div class="chart-two" data-percent="90">
                        <span class="percentage">90<small>%</small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Projects Done</h4>
                        <span>Yes we did it asap software</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="fact-item fact-item-two mb-30">
                    <div class="chart-two" data-percent="79">
                        <span class="percentage">79<small>%</small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Get Rewards</h4>
                        <span>Yes we did it asap software</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- fact-area-end -->

<!-- faq-area -->
<section id="faq" class="faq-area protein-faq pt-90 pb-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title protein-title mb-35">
                    <h6 class="sub-title">Faq</h6>
                    <h2 class="title">Get Every Answers From Here<span>.</span></h2>
                </div>
                <div class="faq-wrapper">
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        MCF ingredients provides a searchable ?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        How to edit MCF themes ?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        MCF app is a powerful application ?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Latest version through MCF powerful ?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="faq-img-wrap">
                    <img src="{{ asset('assets/img/images/faq_img.png') }}" alt="">
                    <div class="img-shape"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- faq-area-end -->

<!-- pricing-area -->
<section id="price" class="pricing-area protein-pricing gray-bg pt-120 pb-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Price</div>
                    <h6 class="sub-title">Plans</h6>
                    <h2 class="title">Price & Plans</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-tabs pricing-nav" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#" class="nav-link" id="weekly-tab" data-bs-toggle="tab" data-bs-target="#weekly" role="tab" aria-controls="weekly" aria-selected="false">Weekly</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#" class="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" role="tab" aria-controls="monthly" aria-selected="true">Monthly</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#" class="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" role="tab" aria-controls="yearly" aria-selected="false">Yearly</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab-content pricing-tab-content" id="myTabContent">
            <div class="tab-pane" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
                <div class="row g-0 justify-content-center align-items-end">
                    <div class="col">
                        <div class="pricing-box best-pack mb-30">
                            <p class="best-value">Best Value</p>
                            <div class="pricing-head">
                                <h2 class="title">Pro</h2>
                                <span>Advanced Features</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>3 Person User MCF <i class="fal fa-check"></i></li>
                                    <li>90 MG Per Capsule <i class="fal fa-check"></i></li>
                                    <li>60 Capsules Per Bottle <i class="fal fa-check"></i></li>
                                    <li>40% Future Purchases <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">$59.00</h2>
                                <p>Billed For <span>6 Months</span></p>
                                <a href="{{ url('/shop') }}" class="btn protein-btn">Shop Now <i class="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="pricing-box mb-30">
                            <div class="pricing-head">
                                <h2 class="title">Basic</h2>
                                <span>Advanced Features</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>1 Person User MCF <i class="fal fa-check"></i></li>
                                    <li>40 MG Per Capsule <i class="fal fa-check"></i></li>
                                    <li>50 Capsules Per Bottle <i class="fal fa-check"></i></li>
                                    <li>20% Future Purchases <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">$29.00</h2>
                                <p>Billed For <span>1 Months</span></p>
                                <a href="{{ url('/shop') }}" class="btn transparent-btn pt-transparent">Shop Now <i class="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                <div class="row g-0 justify-content-center align-items-end">
                    <div class="col">
                        <div class="pricing-box best-pack mb-30">
                            <p class="best-value">Best Value</p>
                            <div class="pricing-head">
                                <h2 class="title">Pro</h2>
                                <span>Advanced Features</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>6 Person User MCF <i class="fal fa-check"></i></li>
                                    <li>90 MG Per Capsule <i class="fal fa-check"></i></li>
                                    <li>60 Capsules Per Bottle <i class="fal fa-check"></i></li>
                                    <li>40% Future Purchases <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">$99.00</h2>
                                <p>Billed For <span>6 Months</span></p>
                                <a href="{{ url('/shop') }}" class="btn protein-btn">Shop Now <i class="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="pricing-box mb-30">
                            <div class="pricing-head">
                                <h2 class="title">Basic</h2>
                                <span>Advanced Features</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>1 Person User MCF <i class="fal fa-check"></i></li>
                                    <li>40 MG Per Capsule <i class="fal fa-check"></i></li>
                                    <li>50 Capsules Per Bottle <i class="fal fa-check"></i></li>
                                    <li>20% Future Purchases <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">$39.00</h2>
                                <p>Billed For <span>1 Months</span></p>
                                <a href="{{ url('/shop') }}" class="btn transparent-btn pt-transparent">Shop Now <i class="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                <div class="row g-0 justify-content-center align-items-end">
                    <div class="col">
                        <div class="pricing-box best-pack mb-30">
                            <p class="best-value">Best Value</p>
                            <div class="pricing-head">
                                <h2 class="title">Pro</h2>
                                <span>Advanced Features</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>9 Person User MCF <i class="fal fa-check"></i></li>
                                    <li>120 MG Per Capsule <i class="fal fa-check"></i></li>
                                    <li>600 Capsules Per Bottle <i class="fal fa-check"></i></li>
                                    <li>60% Future Purchases <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">$199.00</h2>
                                <p>Billed For <span>6 Months</span></p>
                                <a href="{{ url('/shop') }}" class="btn protein-btn">Shop Now <i class="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="pricing-box mb-30">
                            <div class="pricing-head">
                                <h2 class="title">Basic</h2>
                                <span>Advanced Features</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>1 Person User MCF <i class="fal fa-check"></i></li>
                                    <li>40 MG Per Capsule <i class="fal fa-check"></i></li>
                                    <li>50 Capsules Per Bottle <i class="fal fa-check"></i></li>
                                    <li>20% Future Purchases <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">$99.00</h2>
                                <p>Billed For <span>1 Months</span></p>
                                <a href="{{ url('/shop') }}" class="btn transparent-btn pt-transparent">Shop Now <i class="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- pricing-area-end -->

<!-- shop-details-area -->
<section class="shop-details-area protein-shop pt-120 pb-120">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-5">
                <div class="section-title protein-title mb-30">
                    <h6 class="sub-title">Purchase MCF</h6>
                    <h2 class="title">MCF Protein Powder 1kg<span>.</span></h2>
                </div>
                <div class="shop-details-price">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <h2 class="price">$99.99</h2>
                </div>
                <div class="shop-details-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p>
                    <div class="shop-purchase-info">
                        <div class="cart-plus-minus">
                            <form action="#" class="num-block">
                                <input type="text" class="in-num" value="1" readonly="">
                                <div class="qtybutton-box">
                                    <span class="minus dis"><i class="fal fa-minus"></i></span>
                                    <span class="plus"><i class="fal fa-plus"></i></span>
                                </div>
                            </form>
                        </div>
                        <div class="purchase-btn">
                            <a href="{{ url('/shop-details') }}" class="btn protein-btn">Checkout <i class="fal fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <div class="shop-details-img-wrap">
                    <div class="tab-content" id="myTabContentTwo">
                        <div class="tab-pane show active" id="details-thumb01" role="tabpanel" aria-labelledby="details-thumb01-tab">
                            <div class="shop-details-img">
                                <img src="{{ asset('assets/img/product/shop_details_img01.png') }}" alt="">
                                <div class="img-shape"></div>
                            </div>
                        </div>
                        <div class="tab-pane" id="details-thumb02" role="tabpanel" aria-labelledby="details-thumb02-tab">
                            <div class="shop-details-img">
                                <img src="{{ asset('assets/img/product/shop_details_img02.png') }}" alt="">
                                <div class="img-shape"></div>
                            </div>
                        </div>
                        <div class="tab-pane" id="details-thumb03" role="tabpanel" aria-labelledby="details-thumb03-tab">
                            <div class="shop-details-img">
                                <img src="{{ asset('assets/img/product/shop_details_img03.png') }}" alt="">
                                <div class="img-shape"></div>
                            </div>
                        </div>
                    </div>
                    <ul class="nav nav-tabs shop-details-nav-wrap" id="myTabTwo" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a href="#" class="nav-link active" id="details-thumb01-tab" data-bs-toggle="tab" data-bs-target="#details-thumb01" role="tab" aria-controls="details-thumb01" aria-selected="true">
                                <img src="{{ asset('assets/img/product/sd_nav_img01.png') }}" alt="">
                                <div class="img-shape"></div>
                                <span class="rating"><i class="fas fa-star"></i>4.9</span>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#" class="nav-link" id="details-thumb02-tab" data-bs-toggle="tab" data-bs-target="#details-thumb02" role="tab" aria-controls="details-thumb02" aria-selected="false">
                                <img src="{{ asset('assets/img/product/sd_nav_img02.png') }}" alt="">
                                <div class="img-shape"></div>
                                <span class="rating"><i class="fas fa-star"></i>4.5</span>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#" class="nav-link" id="details-thumb03-tab" data-bs-toggle="tab" data-bs-target="#details-thumb03" role="tab" aria-controls="details-thumb03" aria-selected="false">
                                <img src="{{ asset('assets/img/product/sd_nav_img03.png') }}" alt="">
                                <div class="img-shape"></div>
                                <span class="rating"><i class="fas fa-star"></i>4.8</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- shop-details-area-end -->

<!-- cta-area -->
<div class="cta-area protein-cta">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="cta-content">
                    <h6 class="title">Make Free Quote Anytime From Anywhere</h6>
                    <a href="{{ url('/contact') }}" class="make-order">Make Custom Order</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- cta-area-end -->

<!-- blog-area -->
<section id="blog" class="blog-area protein-blog pt-120 pb-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">News</div>
                    <h6 class="sub-title">News</h6>
                    <h2 class="title">News Feeds</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div class="blog-post-thumb">
                        <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/blog_post_thumb01.jpg') }}" alt=""></a>
                        <div class="blog-overlay-tag">
                            <a href="#">Foods</a>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <div class="post-date"><i class="fal fa-calendar-alt"></i> 24th September 2022</div>
                        <h4 class="title"><a href="{{ url('/blog-details') }}">Lorem ipsum dolor sit amet, consectetur adipisicing</a></h4>
                        <a href="{{ url('/blog-details') }}" class="read-more"><span>Read More</span> <i class="fal fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".4s">
                    <div class="blog-post-thumb">
                        <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/blog_post_thumb02.jpg') }}" alt=""></a>
                        <div class="blog-overlay-tag">
                            <a href="#">Gym</a>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <div class="post-date"><i class="fal fa-calendar-alt"></i> 24th September 2022</div>
                        <h4 class="title"><a href="{{ url('/blog-details') }}">Best ways to support your healthy immune system</a></h4>
                        <a href="{{ url('/blog-details') }}" class="read-more"><span>Read More</span> <i class="fal fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".6s">
                    <div class="blog-post-thumb">
                        <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/blog_post_thumb03.jpg') }}" alt=""></a>
                        <div class="blog-overlay-tag">
                            <a href="#">Fitness</a>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <div class="post-date"><i class="fal fa-calendar-alt"></i> 24th September 2022</div>
                        <h4 class="title"><a href="{{ url('/blog-details') }}">Organic food is produced methods complying</a></h4>
                        <a href="{{ url('/blog-details') }}" class="read-more"><span>Read More</span> <i class="fal fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- blog-area-end -->

@endsection
