<?php

namespace Customer\App\Services;

use Customer\App\Services\Blogs\BlogsService;
use Customer\App\Services\Pages\LayoutsService;
use Customer\App\Services\Pages\TemplatesService;
use Customer\App\Services\Pages\SeoKeywordService;
use Customer\App\Services\Pages\WebEnquiryService;

class WebService
{
    public function __construct(){

    }

    /**
     * @return BlogsService
     */
    public function blogs(){

        return new BlogsService();
    }

    /**
     * @return LayoutsService
     */
    public function layouts(){

        return new LayoutsService();
    }

    /**
     * @return TemplatesService
     */
    public function template(){

        return new TemplatesService();
    }

    /**
     * @return SeoKeywordService
     */
    public function seoKeyword(){

        return new SeoKeywordService();
    }

    /**
     * @return WebEnquiryService
     */
    public function webEnquiry(){

        return new WebEnquiryService();
    }
}
