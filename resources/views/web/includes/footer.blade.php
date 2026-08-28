<!-- footer-area -->
<footer class="footer-area protein-footer">
    <div class="footer-top-wrap">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                    <div class="footer-widget">
                        <div class="fw-title">
                            <h5>Support</h5>
                        </div>
                        <div class="fw-link">
                            <ul>
                                <li><a href="#">Knowledge Base</a></li>
                                <li><a href="{{ url('/blog') }}">Blog</a></li>
                                <li><a href="{{ url('/contact') }}">Developer API</a></li>
                                <li><a href="{{ url('/contact') }}">Contact</a></li>
                            </ul>
                        </div>
                        <div class="fw-btn">
                            <ul>
                                <li><a href="#"><img src="{{ asset('assets/img/icon/gp_btn.png') }}" alt=""></a></li>
                                <li><a href="#"><img src="{{ asset('assets/img/icon/as_btn.png') }}" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div class="footer-widget">
                        <div class="fw-title">
                            <h5>Features</h5>
                        </div>
                        <div class="fw-link">
                            <ul>
                                <li><a href="{{ url('/contact') }}">Sales Management</a></li>
                                <li><a href="{{ url('/contact') }}">Contact Management</a></li>
                                <li><a href="{{ url('/contact') }}">Project Management</a></li>
                                <li><a href="{{ url('/contact') }}">HR Management</a></li>
                                <li><a href="{{ url('/contact') }}">Integrations and API</a></li>
                                <li><a href="{{ url('/contact') }}">Gmail & G Suite</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
                    <div class="footer-widget">
                        <div class="fw-title">
                            <h5>About Us</h5>
                        </div>
                        <div class="fw-link">
                            <ul>
                                <li><a href="{{ url('/contact') }}">About Company</a></li>
                                <li><a href="{{ url('/contact') }}">Affiliate Program</a></li>
                                <li><a href="{{ url('/contact') }}">Customer Spotlight</a></li>
                                <li><a href="{{ url('/contact') }}">Reseller Program</a></li>
                                <li><a href="{{ url('/shop') }}">Our Shop</a></li>
                                <li><a href="#price">Price & Plans</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="footer-widget">
                        <div class="fw-title">
                            <h5>News Feeds</h5>
                        </div>
                        <div class="fw-blog-post">
                            <ul>
                                <li>
                                    <div class="thumb">
                                        <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/fw_post_thumb01.jpg') }}" alt=""></a>
                                    </div>
                                    <div class="content">
                                        <span class="date"><i class="fal fa-calendar-alt"></i> 24th October 2022</span>
                                        <h5><a href="{{ url('/blog-details') }}">Simple Ways To Optimize Your Website For SEO</a></h5>
                                    </div>
                                </li>
                                <li>
                                    <div class="thumb">
                                        <a href="{{ url('/blog-details') }}"><img src="{{ asset('assets/img/blog/fw_post_thumb02.jpg') }}" alt=""></a>
                                    </div>
                                    <div class="content">
                                        <span class="date"><i class="fal fa-calendar-alt"></i> 24th October 2022</span>
                                        <h5><a href="{{ url('/blog-details') }}">Simple Ways To Optimize Your Website For SEO</a></h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-payment-method">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="footer-quick-link">
                            <ul>
                                <li><a href="{{ url('/contact') }}">Refund Policy</a></li>
                                <li><a href="{{ url('/contact') }}">Terms & Conditions</a></li>
                                <li><a href="#faq">Faq</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="payment-method-img text-center text-lg-end">
                            <img src="{{ asset('assets/img/images/payment_method.png') }}" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="copyright-text">
                        <p>Copyright By @<a href="{{ url('/') }}">MCF</a> - 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- footer-area-end -->
