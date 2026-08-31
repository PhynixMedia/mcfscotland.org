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
                            <h6 class="sub-title" data-animation="fadeInUp" data-delay=".2s">Maranatha Christ Festival @ 10</h6>
                            <h2 data-animation="fadeInUp" data-delay=".4s">The Lord Has Come. Celebrate His Return</h2>
                            <div class="banner-btn" data-animation="fadeInUp" data-delay=".6s">
                                <a href="#contact" class="btn protein-btn section-link">Reserve A Seat <i class="fal fa-arrow-right"></i></a>
                                <a href="#about" class="btn solid-btn section-link">Our Story <i class="fal fa-arrow-right"></i></a>
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
                            <h6 class="sub-title" data-animation="fadeInUp" data-delay=".2s">Free Interdenominational Gospel Concert</h6>
                            <h2 data-animation="fadeInUp" data-delay=".4s">Ten Years Of Raw Praise And Worship</h2>
                            <div class="banner-btn" data-animation="fadeInUp" data-delay=".6s">
                                <a href="#lineup" class="btn protein-btn section-link">This Year&rsquo;s Line-Up <i class="fal fa-arrow-right"></i></a>
                                <a href="#gallery" class="btn solid-btn section-link">Gallery <i class="fal fa-arrow-right"></i></a>
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

<!-- choose-area -->
<section id="about" class="choose-area protein-choose position-relative pt-120 pb-120">
    <div class="choose-bg"></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div class="choose-content">
                    <div class="section-title protein-title mb-20">
                        <h6 class="sub-title">About The Festival</h6>
                        <h2 class="title">Maranatha Christ Festival<span>.</span></h2>
                    </div>
                    <p>Maranatha Christ Festival is a free interdenominational gospel concert that draws believers from
                    all walks of life to enjoy the highest quality of soul-lifting and edifying praise and worship. Every
                    year the festival parades a plethora of gospel ministers and provides a rallying point for worshippers
                    to praise, dance and rejoice in a conducive, Spirit-filled atmosphere.</p>
                    <p>The festival debuted in 2010 following a word of prophecy from Pastor Audu of the Mountain of Fire
                    and Miracles Ministries, who came to Edinburgh, Scotland on missionary assignment. This year&rsquo;s
                    festival is the 10th edition.</p>
                    <a href="#lineup" class="btn transparent-btn pt-transparent section-link">Meet The Ministers <i class="fal fa-arrow-right"></i></a>
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
                                    <h4>Praise &amp; Worship</h4>
                                    <p>Hours of uninterrupted, Spirit-filled praise led by anointed ministers.</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-supplementary-food"></i>
                                </div>
                                <div class="content">
                                    <h4>Every Denomination</h4>
                                    <p>A rallying point for believers from every church and every background.</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-vitamins"></i>
                                </div>
                                <div class="content">
                                    <h4>Ten Cities, Ten Years</h4>
                                    <p>Edinburgh, London, Lagos, Akure, Ogbomoso, Badagry and Port Harcourt.</p>
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

<!-- features-area -->
<section id="mandate" class="features-area protein-features pt-120 pb-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Mandate</div>
                    <h6 class="sub-title">Why We Gather</h6>
                    <h2 class="title">Our Mandate</h2>
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
                        <h3>Evangelise &amp; Restore</h3>
                        <p>To evangelise and restore lost souls to Christ through raw praise and worship.</p>
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
                        <h3>Celebrate Christ</h3>
                        <p>A platform to celebrate Christ and remind the world that Jesus, our Messiah, is coming soon.</p>
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
                        <h3>Promote Talent</h3>
                        <p>To celebrate and promote Christian talent in ministries all over the world.</p>
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
                        <h3>Forge Friendships</h3>
                        <p>To forge friendships and network gospel resources across churches and nations.</p>
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
                        <h3>Every Background</h3>
                        <p>Open to all, regardless of race, gender, genre, denomination or ethnic background.</p>
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
                        <h3>Always Free</h3>
                        <p>Every edition is free to attend. No ticket price has ever stood between anyone and worship.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- features-area-end -->

<!-- line-up-area -->
<section id="lineup" class="blog-area protein-blog pt-120 pb-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Line-Up</div>
                    <h6 class="sub-title">Hosts, Ambassadors &amp; Guest Artists</h6>
                    <h2 class="title">Who You Will Hear</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div class="blog-post-thumb">
                        <img src="{{ asset('assets/img/blog/blog_post_thumb01.jpg') }}" alt="Sophie Fey">
                        <div class="blog-overlay-tag">
                            <span>Host &amp; Convener</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Sophie Fey</h4>
                        <p>Ololade Ajiwo, convener of the vision, and founder of Real Women of Purpose International.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".4s">
                    <div class="blog-post-thumb">
                        <img src="{{ asset('assets/img/blog/blog_post_thumb02.jpg') }}" alt="Evang. (Dr) Funmi Aragbaiye">
                        <div class="blog-overlay-tag">
                            <span>Life Patron &amp; Matron</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Evang. (Dr) Funmi Aragbaiye</h4>
                        <p>A veteran of gospel ministry and the festival&rsquo;s life patron.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".6s">
                    <div class="blog-post-thumb">
                        <img src="{{ asset('assets/img/blog/blog_post_thumb03.jpg') }}" alt="Rev. Mike Abdul">
                        <div class="blog-overlay-tag">
                            <span>Guest Artist</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Rev. Mike Abdul</h4>
                        <p>A worshipper who sees no limit in worship. Member of the highly favoured Midnight Crew, hit songwriter and composer.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div class="blog-post-thumb">
                        <img src="{{ asset('assets/img/blog/blog_post_thumb01.jpg') }}" alt="MC SACO">
                        <div class="blog-overlay-tag">
                            <span>Compere</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">MC SACO</h4>
                        <p>The Senior Advocate of Comedy. Multiple award-winning compere, sought after the world over.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".4s">
                    <div class="blog-post-thumb">
                        <img src="{{ asset('assets/img/blog/blog_post_thumb02.jpg') }}" alt="Michael Whyte">
                        <div class="blog-overlay-tag">
                            <span>Ambassador &middot; New York</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Michael Whyte</h4>
                        <p>Worship leader and songwriter who has ministered alongside renowned gospel ministers at home and abroad.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".6s">
                    <div class="blog-post-thumb">
                        <img src="{{ asset('assets/img/blog/blog_post_thumb03.jpg') }}" alt="Ayaba Esther George">
                        <div class="blog-overlay-tag">
                            <span>Ambassador &middot; UK</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Ayaba Esther George</h4>
                        <p>Seasoned songwriter, vocalist and award-winning praise leader.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- line-up-area-end -->

<!-- video-area -->
<section class="video-area protein-video black-bg fix pt-120">
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-5">
                <div class="video-content">
                    <div class="section-title protein-title white-title mb-35">
                        <h6 class="sub-title">Watch</h6>
                        <h2 class="title">Ten Years Of Praise<span>.</span></h2>
                    </div>
                    <p>Six hours of uninterrupted praise and worship, a stage shared by ministers from across the world, and
                    a room full of believers who came to celebrate. This is what a Maranatha night looks like.</p>
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
                    <div class="overlay-title">Gallery</div>
                    <h6 class="sub-title">Past Editions</h6>
                    <h2 class="title">Ten Years In Pictures</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="product-menu">
                    <button class="active" data-filter="*">All Editions</button>
                    <button data-filter=".cat-one">Edinburgh</button>
                    <button data-filter=".cat-two">London</button>
                    <button data-filter=".cat-three">Lagos</button>
                    <button data-filter=".cat-four">Akure</button>
                    <button data-filter=".cat-five">Ogbomoso</button>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="row gallery-product-active">
                    <div class="col-lg-4 col-sm-6 grid-item cat-two cat-three cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product01.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product01.jpg') }}" class="popup-image" title="Edinburgh &mdash; the debut all-night edition"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-four cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product02.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product02.jpg') }}" class="popup-image" title="London &mdash; praise and worship"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-two cat-three cat-four">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product03.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product03.jpg') }}" class="popup-image" title="Lagos &mdash; the ministers on stage"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-two cat-three cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product04.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product04.jpg') }}" class="popup-image" title="Akure &mdash; led by Yemibee and HEF"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-two cat-four cat-five">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product05.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product05.jpg') }}" class="popup-image" title="Ogbomoso &mdash; with Abajesurin"></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 grid-item cat-one cat-three cat-four">
                        <div class="gallery-product-item mb-30">
                            <img src="{{ asset('assets/img/product/gallery_product06.jpg') }}" alt="">
                            <a href="{{ asset('assets/img/product/gallery_product06.jpg') }}" class="popup-image" title="Port Harcourt &mdash; hands raised"></a>
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
                    <div class="chart-two" data-percent="100">
                        <span class="percentage">10<small></small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Editions</h4>
                        <span>Since our first night in 2010</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="fact-item fact-item-two mb-30">
                    <div class="chart-two" data-percent="100">
                        <span class="percentage">8<small></small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Cities</h4>
                        <span>Across the UK and Nigeria</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="fact-item fact-item-two mb-30">
                    <div class="chart-two" data-percent="100">
                        <span class="percentage">40<small>+</small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Gospel Ministers</h4>
                        <span>Who have graced our stage</span>
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
                    <h6 class="sub-title">Before You Come</h6>
                    <h2 class="title">Questions, Answered<span>.</span></h2>
                </div>
                <div class="faq-wrapper">
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Is Maranatha Christ Festival really free?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    Yes. Every edition has been free to attend since 2010, and it always will be. There is no ticket price and no collection at the door.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        Who can attend?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    Everyone. Maranatha is interdenominational &mdash; believers from every church, every background, every age. Families are very welcome.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Where has the festival been held?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    Edinburgh hosted the debut all-night edition in 2010. Since then the festival has been held in London, Lagos, Akure, Ogbomoso, Badagry and Port Harcourt. Accra, New York City and Ireland are next.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn-block text-start collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What is MCF L.O.L.?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="card-body">
                                    MCF L.O.L. &mdash; Laugh Out Loud &mdash; is our comedy night, launched in Edinburgh in 2024. Local and international comedians, a relaxed room, and a reminder that a cheerful heart is good medicine.
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
<section id="sponsor" class="pricing-area protein-pricing gray-bg pt-120 pb-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Partner</div>
                    <h6 class="sub-title">Sponsorship &amp; Advertising</h6>
                    <h2 class="title">Partner With Us</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-tabs pricing-nav" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#" class="nav-link" id="weekly-tab" data-bs-toggle="tab" data-bs-target="#weekly" role="tab" aria-controls="weekly" aria-selected="false">Sponsorship</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#" class="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" role="tab" aria-controls="monthly" aria-selected="true">Programme Advert</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#" class="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" role="tab" aria-controls="yearly" aria-selected="false">Get Involved</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab-content pricing-tab-content" id="myTabContent">
            <div class="tab-pane" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
                <div class="row g-0 justify-content-center align-items-end">
                    <div class="col">
                        <div class="pricing-box best-pack mb-30">
                            <p class="best-value">Most Support</p>
                            <div class="pricing-head">
                                <h2 class="title">Gold</h2>
                                <span>Headline sponsor</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Logo on stage backdrop <i class="fal fa-check"></i></li>
                                    <li>Full page in the programme <i class="fal fa-check"></i></li>
                                    <li>Named from the stage <i class="fal fa-check"></i></li>
                                    <li>Logo on the website <i class="fal fa-check"></i></li>
                                    <li>Social media features <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">On request</h2>
                                <p>One edition</p>
                                <a href="#contact" class="btn protein-btn section-link">Talk To Us <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="pricing-box mb-30">
                            <div class="pricing-head">
                                <h2 class="title">Silver</h2>
                                <span>Supporting sponsor</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Logo on the sponsor board <i class="fal fa-check"></i></li>
                                    <li>Half page in the programme <i class="fal fa-check"></i></li>
                                    <li>Logo on the website <i class="fal fa-check"></i></li>
                                    <li>Social media mention <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">On request</h2>
                                <p>One edition</p>
                                <a href="#contact" class="btn transparent-btn pt-transparent section-link">Talk To Us <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                <div class="row g-0 justify-content-center align-items-end">
                    <div class="col">
                        <div class="pricing-box best-pack mb-30">
                            <p class="best-value">Most Support</p>
                            <div class="pricing-head">
                                <h2 class="title">Full Page</h2>
                                <span>148 &times; 210 mm</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Full page, full colour <i class="fal fa-check"></i></li>
                                    <li>Inside cover available <i class="fal fa-check"></i></li>
                                    <li>Artwork 154 &times; 216 mm with bleed <i class="fal fa-check"></i></li>
                                    <li>Press-ready PDF, CMYK, 300 dpi <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">On request</h2>
                                <p>Per edition</p>
                                <a href="#contact" class="btn protein-btn section-link">Book A Page <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="pricing-box mb-30">
                            <div class="pricing-head">
                                <h2 class="title">Half Page</h2>
                                <span>148 &times; 105 mm</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Half page, full colour <i class="fal fa-check"></i></li>
                                    <li>Landscape format <i class="fal fa-check"></i></li>
                                    <li>Artwork 154 &times; 111 mm with bleed <i class="fal fa-check"></i></li>
                                    <li>Press-ready PDF, CMYK, 300 dpi <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">On request</h2>
                                <p>Per edition</p>
                                <a href="#contact" class="btn transparent-btn pt-transparent section-link">Book A Page <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                <div class="row g-0 justify-content-center align-items-end">
                    <div class="col">
                        <div class="pricing-box best-pack mb-30">
                            <p class="best-value">Most Support</p>
                            <div class="pricing-head">
                                <h2 class="title">Partner</h2>
                                <span>Churches &amp; organisations</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Bring your congregation <i class="fal fa-check"></i></li>
                                    <li>Host a future edition <i class="fal fa-check"></i></li>
                                    <li>Join the planning team <i class="fal fa-check"></i></li>
                                    <li>Network gospel resources <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">Get in touch</h2>
                                <p>Any edition</p>
                                <a href="#contact" class="btn protein-btn section-link">Partner With Us <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="pricing-box mb-30">
                            <div class="pricing-head">
                                <h2 class="title">Volunteer</h2>
                                <span>Give your time</span>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Stewarding on the night <i class="fal fa-check"></i></li>
                                    <li>Media and photography <i class="fal fa-check"></i></li>
                                    <li>Hospitality and welcome <i class="fal fa-check"></i></li>
                                    <li>Set-up and pack-down <i class="fal fa-check"></i></li>
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <h2 class="price">Get in touch</h2>
                                <p>Any edition</p>
                                <a href="#contact" class="btn transparent-btn pt-transparent section-link">Volunteer <i class="fal fa-arrow-right"></i></a>
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
<section id="lol" class="shop-details-area protein-shop pt-120 pb-120">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-5">
                <div class="section-title protein-title mb-30">
                    <h6 class="sub-title">New For 2024</h6>
                    <h2 class="title">MCF L.O.L.<span>.</span></h2>
                </div>
                <div class="shop-details-content">
                    <p>Laugh Out Loud is our comedy night, and it debuted in Edinburgh, Scotland. The idea is a relaxed
                    atmosphere &mdash; fun, networking, and renowned and upcoming comedians from home and abroad, on a
                    platform built to support crafts and talents.</p>
                    <p>Laughter truly acts as medicine for the soul. A cheerful heart is good medicine, and both medical
                    and psychological insight confirm that a good laugh brings profound physical, mental and social healing.</p>
                    <div class="shop-purchase-info">
                        <div class="purchase-btn">
                            <a href="#contact" class="btn protein-btn section-link">Join The Next One <i class="fal fa-arrow-right"></i></a>
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
                    <h6 class="title">Ten Editions. Free Entry. Everyone Welcome.</h6>
                    <a href="#contact" class="make-order section-link">Reserve A Seat</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- cta-area-end -->

@endsection
