<!-- header-area -->
<header>
    <div id="sticky-header" class="menu-area protein-header transparent-header">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="mobile-nav-toggler"><i class="flaticon-menu"></i></div>
                    <div class="menu-wrap">
                        <nav class="menu-nav show">
                            <div class="logo">
                                <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/mcf_logo.png') }}" alt="Logo"></a>
                            </div>
                            <div class="navbar-wrap main-menu d-none d-lg-flex">
                                <ul class="navigation">
                                    <li class="active"><a href="#home" class="section-link">Home</a></li>
                                    <li><a href="#about" class="section-link">About</a></li>
                                    <li><a href="#mandate" class="section-link">Mandate</a></li>
                                    <li><a href="#lineup" class="section-link">Line-Up</a></li>
                                    <li><a href="#gallery" class="section-link">Gallery</a></li>
                                    <li><a href="#lol" class="section-link">MCF L.O.L.</a></li>
                                    <li><a href="#contact" class="section-link">Contact</a></li>
                                </ul>
                            </div>
                            <div class="header-action d-none d-sm-block">
                                <ul>
                                    <li class="header-search"><a href="#"><i class="flaticon-search"></i></a></li>
                                    <li class="offcanvas-btn d-none d-lg-block"><a href="#" class="navSidebar-button"><i class="flaticon-menu"></i></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!-- Mobile Menu  -->
                    <div class="mobile-menu">
                        <nav class="menu-box">
                            <div class="close-btn"><i class="far fa-times"></i></div>
                            <div class="nav-logo"><a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/mcf_logo_white.png') }}" alt="" title=""></a></div>
                            <div class="menu-outer">
                                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li class="facebook"><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                    <li class="twitter"><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li class="pinterest"><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li class="instagram"><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li class="youtube"><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-backdrop"></div>
                    <!-- End Mobile Menu -->
                </div>
            </div>
        </div>
    </div>

    <!-- header-search -->
    <div class="search-popup-wrap protein-search" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="search-close">
            <span><i class="fas fa-times"></i></span>
        </div>
        <div class="search-wrap text-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="title">... Search Here ...</h2>
                        <div class="search-form">
                            <form action="#">
                                <input type="text" name="search" placeholder="Type keywords here">
                                <button class="search-btn"><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- header-search-end -->

    <!-- off-canvas-start -->
    <div class="sidebar-off-canvas protein-off-canvas info-group">
        <div class="off-canvas-overlay"></div>
        <div class="off-canvas-widget scroll">
            <div class="sidebar-widget-container">
                <div class="off-canvas-heading">
                    <a href="#" class="close-side-widget">
                        <span class="flaticon-targeting-cross"></span>
                    </a>
                </div>
                <div class="sidebar-textwidget">
                    <div class="sidebar-info-contents">
                        <div class="content-inner">
                            <div class="logo mb-30">
                                <a href="{{ url('/') }}"><img src="{{ asset('assets/img/logo/mcf_logo.png') }}" alt=""></a>
                            </div>
                            <div class="content-box">
                                <p>A free interdenominational gospel concert, celebrating Christ across ten cities since 2010.</p>
                            </div>
                            <div class="contact-info">
                                <h4 class="title">CONTACT US</h4>
                                <ul>
                                    <li><i class="fal fa-phone"></i><a href="tel:+447961221117">+44 7961 221117</a>
                                    </li>
                                    <li><i class="fal fa-envelope-open-text"></i><a href="mailto:info@mcfscotland.org">info@mcfscotland.org</a></li>
                                    <li><i class="fal fa-map-marked-alt"></i>Edinburgh, Scotland</li>
                                </ul>
                            </div>
                            <div class="oc-newsletter">
                                <h4 class="title">NEWSLETTER</h4>
                                <p>Fill your email below to subscribe to my newsletter</p>
                                <form action="#">
                                    <input type="email" placeholder="Your Email...">
                                    <button class="btn">Subscribe Now</button>
                                </form>
                            </div>
                            <div class="oc-social">
                                <ul>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- off-canvas-end -->

</header>
<!-- header-area-end -->
