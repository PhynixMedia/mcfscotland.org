<?php

use Illuminate\Database\Seeder;
use Customer\App\Models\Pages\Layouts;
use Customer\App\Models\Pages\Templates;

/**
 * Pages served by Customer\App\Controllers\Web\IndexController.
 *
 * `url` is the lookup key (TemplatesService::loadPage) *and* the blade that
 * gets rendered — WebController::get_view() resolves view("web.pages.{$url}").
 * So a row's url must match a file at resources/views/web/pages/{url}.blade.php.
 *
 * Idempotent: safe to re-run without duplicating rows.
 */
class WebPageTemplateSeeder extends Seeder
{
    public function run()
    {
        $pages = [
            [
                'title'            => 'Home',
                'url'              => 'home',
                'layout'           => 'home.blade.php',
                'meta_title'       => 'MCF Scotland',
                'meta_description' => 'MCF Scotland',
                'parent'           => 0,
                'category'         => 1,
                'header_position'  => 1,
                'footer_position'  => 1,
                'page_order'       => 1,
                'status'           => 1,
            ],
        ];

        foreach ($pages as $page) {
            $layout = Layouts::where('layout', $page['layout'])->first();

            if (! $layout) {
                $this->command->warn("Skipping '{$page['url']}' — no layout row for {$page['layout']}. Run WebPageLayoutSeeder first.");
                continue;
            }

            unset($page['layout']);
            $page['layout_id'] = $layout->id;

            Templates::updateOrCreate(['url' => $page['url']], $page);
        }
    }
}
