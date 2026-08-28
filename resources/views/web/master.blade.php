<!doctype html>
<html class="no-js" lang="en">
@include('web.includes.header')

<body>

    <!-- preloader -->
    <div id="preloader">
        <div id="loading-center">
            <div class="loader loader-four">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>
            </div>
        </div>
    </div>
    <!-- preloader-end -->

    <!-- Scroll-top -->
    <button class="scroll-top scroll-to-target protein-scroll" data-target="html">
        <i class="fas fa-angle-up"></i>
    </button>
    <!-- Scroll-top-end -->

    @include('web.includes.menu')

    <!-- main-area -->
    <main>

        @yield('slider')

        @yield('content')

    </main>
    <!-- main-area-end -->

    @include('web.includes.footer')

    @include('web.includes.scripts')
    @yield('scripts')

</body>
</html>
