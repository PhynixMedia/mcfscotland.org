<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * Order matters: a template row needs its layout row to exist first.
     *
     * WebPageBlocksSeeder / WebPageGroupSeeder / WebPageElementSeeder are not
     * called. They were written against an older schema — they target
     * web_page_group and web_page_element, neither of which exists here
     * (elements are stored as JSON on web_page_groups.element), and the blocks
     * seeder has an undefined constant in it. The pages are static markup at
     * the moment so no content blocks are needed; rewrite them when the CMS
     * driven sections come back.
     *
     * @return void
     */
    public function run()
    {
        $this->call(WebPageLayoutSeeder::class);
        $this->call(WebPageTemplateSeeder::class);
    }
}
