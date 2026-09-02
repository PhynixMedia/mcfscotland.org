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
                            <img src="{{ asset('assets/img/banner/20260902_093307.png') }}" alt="">
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
                            <img src="{{ asset('assets/img/banner/20260902_094025.png') }}" alt="">
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
{{-- <div class="brand-area">
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
</div> --}}
<!-- brand-area-end -->

<!-- choose-area -->
<section id="about" class="choose-area protein-choose position-relative pt-120 pb-120">
    <div class="choose-bg"></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div class="choose-content">
                    <div class="section-title protein-title mb-20">
                        <h6 class="sub-title">Who We Are</h6>
                        <h2 class="title">More Than A Concert<span>.</span></h2>
                    </div>
                    <p>Maranatha Christ Festival is an interdenominational gospel festival dedicated to celebrating
                    Jesus Christ through praise, worship, evangelism, fellowship and the expression of God-given talents.
                    It brings together believers from diverse denominations, cultures and communities in an atmosphere of
                    joyful celebration and spiritual renewal.</p>
                    <p>The name &ldquo;Maranatha&rdquo; carries the festival&rsquo;s central message &mdash; a focus on Christ
                    and His promised return. That message remains at the heart of the vision, which began in Edinburgh in 2010
                    following a prophetic word from Pastor Audu of the Mountain of Fire and Miracles Ministries.</p>
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
                                    <h4>Worship Gatherings</h4>
                                    <p>Free, interdenominational celebration built around praise, worship and fellowship.</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-supplementary-food"></i>
                                </div>
                                <div class="content">
                                    <h4>Evangelism</h4>
                                    <p>Every gathering carries an evangelistic purpose &mdash; pointing people to Christ.</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-vitamins"></i>
                                </div>
                                <div class="content">
                                    <h4>Talent Platform</h4>
                                    <p>A stage for ministers, musicians, comedians and creatives to use their gifts.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="choose-img">
                        <img class="main-img" src="{{ asset('assets/img/images/20260902_110512.png') }}" alt="">
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
                    <h6 class="sub-title">Three Objectives, And How We Live Them</h6>
                    <h2 class="title">Our Mandate</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">01</div>
                    <div class="features-icon mb-25">
                        <i class="fal fa-dove" aria-hidden="true"></i>
                    </div>
                    <div class="features-content">
                        <h3>Evangelism &amp; Soul Winning</h3>
                        <p>To evangelise and encourage the restoration of lost souls to Christ through authentic praise, worship and the proclamation of the Gospel.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center active mb-30">
                    <div class="features-count">02</div>
                    <div class="features-icon mb-25">
                        <i class="fal fa-microphone" aria-hidden="true"></i>
                    </div>
                    <div class="features-content">
                        <h3>Celebrating Christian Talents</h3>
                        <p>To celebrate, promote and provide platforms for Christian talents and ministries, enabling God-given gifts to be used for His glory.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">03</div>
                    <div class="features-icon mb-25">
                        <i class="fal fa-handshake" aria-hidden="true"></i>
                    </div>
                    <div class="features-content">
                        <h3>Building Christian Relationships</h3>
                        <p>To forge meaningful friendships and create opportunities for the exchange and networking of gospel resources and ministries.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">04</div>
                    <div class="features-icon mb-25">
                        <i class="fal fa-guitar" aria-hidden="true"></i>
                    </div>
                    <div class="features-content">
                        <h3>Concerts &amp; Gatherings</h3>
                        <p>Free, interdenominational celebrations bringing gospel ministers, worship leaders and musicians together in one room.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">05</div>
                    <div class="features-icon mb-25">
                        <i class="fal fa-users" aria-hidden="true"></i>
                    </div>
                    <div class="features-content">
                        <h3>Fellowship &amp; Networking</h3>
                        <p>A shared space for worship that encourages collaboration and the exchange of ideas among Christians and ministries.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item text-center mb-30">
                    <div class="features-count">06</div>
                    <div class="features-icon mb-25">
                        <i class="fal fa-theater-masks" aria-hidden="true"></i>
                    </div>
                    <div class="features-content">
                        <h3>Creative Platforms</h3>
                        <p>Initiatives beyond the main stage &mdash; including MCF L.O.L. &mdash; supporting wholesome creativity and community.</p>
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
            <div class="col-xl-7 col-lg-9">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Lineup</div>
                    <h6 class="sub-title">The Convener, Ambassadors &amp; Guest Ministers</h6>
                    <h2 class="title">Who You Will Hear</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div class="blog-post-thumb lineup-thumb">
                        @php $portrait = image_by_stem('assets/img/lineup/sophie-fey'); @endphp
                        @if ($portrait)
                            <img src="{{ $portrait }}" alt="Sophie Fey">
                        @else
                            <div class="lineup-avatar" role="img" aria-label="Sophie Fey"><i class="fal fa-user" aria-hidden="true"></i></div>
                        @endif
                        <div class="blog-overlay-tag">
                            <span>The Convener</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Sophie Fey</h4>
                        <p>Convener of Maranatha Christ Festival and the visionary behind its journey since inception. Founder of Real Women of Purpose International.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".4s">
                    <div class="blog-post-thumb lineup-thumb">
                        @php $portrait = image_by_stem('assets/img/lineup/funmi-aragbaiye'); @endphp
                        @if ($portrait)
                            <img src="{{ $portrait }}" alt="Evang. (Dr.) Funmi Aragbaiye">
                        @else
                            <div class="lineup-avatar" role="img" aria-label="Evang. (Dr.) Funmi Aragbaiye"><i class="fal fa-user" aria-hidden="true"></i></div>
                        @endif
                        <div class="blog-overlay-tag">
                            <span>Life Patron &amp; Matron</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Evang. (Dr.) Funmi Aragbaiye</h4>
                        <p>A respected gospel minister whose contribution to Christian music has established her as a notable voice within the Nigerian gospel community.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".6s">
                    <div class="blog-post-thumb lineup-thumb">
                        @php $portrait = image_by_stem('assets/img/lineup/mike-abdul'); @endphp
                        @if ($portrait)
                            <img src="{{ $portrait }}" alt="Rev. Mike Abdul">
                        @else
                            <div class="lineup-avatar" role="img" aria-label="Rev. Mike Abdul"><i class="fal fa-user" aria-hidden="true"></i></div>
                        @endif
                        <div class="blog-overlay-tag">
                            <span>Guest Minister</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Rev. Mike Abdul</h4>
                        <p>Gospel minister, worshipper, songwriter and composer whose ministry is rooted in a passion for reaching people through music.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div class="blog-post-thumb lineup-thumb">
                        @php $portrait = image_by_stem('assets/img/lineup/mc-saco'); @endphp
                        @if ($portrait)
                            <img src="{{ $portrait }}" alt="MC SACO">
                        @else
                            <div class="lineup-avatar" role="img" aria-label="MC SACO"><i class="fal fa-user" aria-hidden="true"></i></div>
                        @endif
                        <div class="blog-overlay-tag">
                            <span>Compere</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">MC SACO</h4>
                        <p>The Senior Advocate of Comedy. A multiple award-winning comedian, professional compere and dynamic entertainer.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".4s">
                    <div class="blog-post-thumb lineup-thumb">
                        @php $portrait = image_by_stem('assets/img/lineup/michael-whyte'); @endphp
                        @if ($portrait)
                            <img src="{{ $portrait }}" alt="Michael Whyte">
                        @else
                            <div class="lineup-avatar" role="img" aria-label="Michael Whyte"><i class="fal fa-user" aria-hidden="true"></i></div>
                        @endif
                        <div class="blog-overlay-tag">
                            <span>Ambassador &middot; New York</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Michael Whyte</h4>
                        <p>Worship leader and songwriter based in New York City, who has ministered alongside renowned gospel ministers at home and internationally.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="blog-post-item mb-30 wow fadeInUp" data-wow-delay=".6s">
                    <div class="blog-post-thumb lineup-thumb">
                        @php $portrait = image_by_stem('assets/img/lineup/ayaba-esther-george'); @endphp
                        @if ($portrait)
                            <img src="{{ $portrait }}" alt="Ayaba Esther George">
                        @else
                            <div class="lineup-avatar" role="img" aria-label="Ayaba Esther George"><i class="fal fa-user" aria-hidden="true"></i></div>
                        @endif
                        <div class="blog-overlay-tag">
                            <span>Ambassador &middot; UK</span>
                        </div>
                    </div>
                    <div class="blog-post-content">
                        <h4 class="title">Ayaba Esther George</h4>
                        <p>UK-based indigenous gospel artist, seasoned songwriter, vocalist and award-winning praise leader.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-9">
                <div class="lineup-alumni">
                    <h5>Ministers who have graced the festival</h5>
                    <p>Pastor Gabriel Eziashi &middot; El Mafrex &middot; Michael Pounds &middot; Moty Aduragbemi &middot; Dolly P &middot;
                    Mike Abdul &middot; MoniQue &middot; A&rsquo;Dam &middot; Biyi Samuel &middot; Ayaba Esther &middot; Eloho Efemui &middot;
                    Aniete Ezimo &middot; C4C &middot; Phemo Olokodana &middot; Adebayo Jones &middot; MC SACO &middot; Hossanah Voices &middot;
                    Femi King &middot; Abajesurin &middot; HEF &middot; The Revival Train &middot; The REVIVALS &middot;
                    Evang. Dr. Funmi Aragbaye &middot; Telemi &middot; Sola Soetan &middot; Liza C &mdash; among others.</p>
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
                        <h2 class="title">From Edinburgh, Outward<span>.</span></h2>
                    </div>
                    <p>The debut edition was an all-night gathering &mdash; six uninterrupted hours of praise and worship led by
                    Wale Adebanjo and Timileyin Falayi. Since then the festival has travelled from Edinburgh to London, Lagos,
                    Akure, Ogbomoso, Badagry and Port Harcourt.</p>
                    <div class="slider-nav"></div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-7">
                <div class="video-active">
                    <div class="video-item">
                        <img src="{{ asset('assets/img/images/20260902_142443.png') }}" alt="">
                        {{-- <a href="https://www.youtube.com/watch?v=vkNcyKbRgqY" class="popup-video ripple-white"><i class="fas fa-play"></i></a> --}}
                    </div>
                    {{-- <div class="video-item">
                        <img src="{{ asset('assets/img/images/video_img02.png') }}" alt="">
                        <a href="https://www.youtube.com/watch?v=vkNcyKbRgqY" class="popup-video ripple-white"><i class="fas fa-play"></i></a>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>
</section>
<!-- video-area-end -->

<!-- gallery-area -->
<section id="gallery" class="gallery-area protein-gallery pt-120 pb-90">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Gallery</div>
                    <h6 class="sub-title">Moments From The Festival</h6>
                    <h2 class="title">Ten Years In Pictures</h2>
                </div>
            </div>
        </div>
        @php
            // Everything in public/assets/img/gallery is shown, in filename order.
            // Nothing to categorise and no markup to edit — just drop files in.
            $gallery = images_in('assets/img/gallery');

            // Until real photos land, keep the section looking right with theme stock.
            if (! $gallery) {
                $gallery = array_map(function ($i) {
                    return "assets/img/product/gallery_product0{$i}.jpg";
                }, range(1, 6));
            }
        @endphp
        <div class="row gallery-product-active">
            @foreach ($gallery as $image)
                @php $caption = caption_from_filename($image); @endphp
                <div class="col-lg-4 col-sm-6 grid-item">
                    <div class="gallery-product-item mb-30">
                        <img src="{{ asset($image) }}" alt="{{ $caption ?: 'Maranatha Christ Festival' }}"
                             loading="lazy" decoding="async">
                        <a href="{{ asset($image) }}" class="popup-image" title="{{ $caption }}"></a>
                    </div>
                </div>
            @endforeach
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
                        <span class="percentage">10<small>+</small></span>
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
                        <span class="percentage">7<small></small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Cities</h4>
                        <span>Across the United Kingdom and Nigeria</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="fact-item fact-item-two mb-30">
                    <div class="chart-two" data-percent="100">
                        <span class="percentage">6<small></small></span>
                    </div>
                    <div class="fact-content">
                        <h4 class="title">Ambassadors</h4>
                        <span>Carrying the vision across nations</span>
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
                    <img src="{{ asset('assets/img/images/20260902_111444.png') }}" alt="">
                    <div class="img-shape"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- faq-area-end -->



<!-- shop-details-area -->
<section id="lol" class="shop-details-area protein-shop pt-120 pb-120">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-6">
                <div class="section-title protein-title mb-30">
                    <h6 class="sub-title">New For 2024</h6>
                    <h2 class="title">MCF L.O.L.<span>.</span></h2>
                </div>
                <div class="shop-details-content">
                    <p>In 2024 the vision expanded with MCF L.O.L. &mdash; a platform bringing comedians, creatives and the wider
                    Christian community together in a relaxed atmosphere of laughter, connection and fellowship. The debut
                    edition was held in Edinburgh, Scotland.</p>
                    <p>It is built on the understanding that joy, healthy recreation and meaningful relationships matter to a
                    community. Both renowned and emerging talents get a stage, visibility and the chance to build real networks.</p>
                    <p class="lol-strap">Where creativity meets community, and laughter creates connection.</p>
                    <div class="shop-purchase-info">
                        <div class="purchase-btn">
                            <a href="#contact" class="btn protein-btn section-link">Join The Next One <i class="fal fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="faq-img-wrap">
                    <img src="{{ asset('assets/img/images/20260902_112159.png') }}" alt="">
                    <div class="img-shape"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- shop-details-area-end -->

<!-- contact-area -->
<section id="contact" class="contact-area protein-features pt-120 pb-90 gray-bg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-9">
                <div class="section-title protein-title text-center mb-50">
                    <div class="overlay-title">Contact</div>
                    <h6 class="sub-title">Sponsor &middot; Advertise &middot; Volunteer &middot; Minister</h6>
                    <h2 class="title">Talk To Us</h2>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-9">
                <a class="features-item contact-card text-center mb-30" href="tel:+447961221117">
                    <div class="features-icon mb-25"><i class="fal fa-phone" aria-hidden="true"></i></div>
                    <div class="features-content">
                        <h3>Call Us</h3>
                        <p class="contact-value">+44 7961 221117</p>
                        <span class="contact-hint">Tap to call</span>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <a class="features-item contact-card text-center active mb-30" href="mailto:info@mcf-scotland.com">
                    <div class="features-icon mb-25"><i class="fal fa-envelope-open-text" aria-hidden="true"></i></div>
                    <div class="features-content">
                        <h3>Email Us</h3>
                        <p class="contact-value">info@mcf-scotland.com</p>
                        <span class="contact-hint">We reply within a few days</span>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-9">
                <div class="features-item contact-card text-center mb-30">
                    <div class="features-icon mb-25"><i class="fal fa-map-marked-alt" aria-hidden="true"></i></div>
                    <div class="features-content">
                        <h3>Find Us</h3>
                        <p class="contact-value">Edinburgh, Scotland</p>
                        <span class="contact-hint">Where the vision began, in 2010</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-xl-9">
                <div class="contact-note text-center">
                    <p>Whether you would like to <strong>sponsor the festival</strong>, <strong>advertise in the
                    programme</strong>, <strong>volunteer</strong> or <strong>minister with us</strong>, reach out on any
                    of the above and tell us which. We would love to hear from you.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- contact-area-end -->

@endsection
