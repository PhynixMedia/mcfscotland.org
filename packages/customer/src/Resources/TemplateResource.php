<?php

namespace Customer\App\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TemplateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $responseData = [
            'id' => $this->id,
            'title' => $this->title,
            'url' => $this->url,
            'parent' => $this->parent,
            'category' => $this->category,
            'layout' => $this->layouts,
            'meta_keyword' => $this->metakeywords,
            'page_order' => $this->page_order,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];


        $blocksData = [];
        foreach ($this->blocks as $block) {
            $blockData = [
                'block_name' => $block->block_name,
                'multiple' => $block->multiple,
                'item_max' => $block->item_max,
                'status' => $block->status,
            ];

            $groupsData = [];
            foreach ($block->groups as $group) {
                $groupData = [
                    'name' => $group->name,
                    'multiple' => $group->multiple,
                    'item_max' => $group->item_max,
                    'status' => $group->status,
                ];

                $elementsData = [];
                foreach ($group->element as $elem) {
                    $elementData = [
                        'name' => $elem->name,
                        'type' => $elem->type,
                        'value' => $elem->value,
                    ];

                    if ($elem->image) {
                        $elementData['image'] = $elem->image;
                    }

                    if ($elem->video) {
                        $elementData['video'] = $elem->video;
                    }

                    $elementsData[] = $elementData;
                }

                $groupData['elements'] = $elementsData;
                $groupsData[] = $groupData;
            }

            $blockData['groups'] = $groupsData;
            $blocksData[] = $blockData;
        }

        $responseData['blocks'] = $blocksData;

        return $responseData;
    }
}
