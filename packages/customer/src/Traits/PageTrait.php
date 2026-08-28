<?php

namespace Customer\App\Traits;

trait PageTrait
{

    public static function setElements($records){

        if(!$records){
            return [];
        }

        $responseData = [];
        foreach ($records->toArray() as $record) {
            $blockData = [
                'id' => $record['id'],
                'uuid' => $record['uuid'],
                'title' => $record['title'],
                'url' => $record['url'],
                'parent' => $record['parent'],
                'category' => $record['category'],
                'layout' => $record['layouts'],
                'meta_keyword' => $record['metakeywords'],
                'page_order' => $record['page_order'],
                'status' => $record['status'],
                'created_at' => $record['created_at'],
                'updated_at' => $record['updated_at'],
            ];

            foreach ($record['blocks'] as $block) {
                $blockName = $block['block_name'];
                $groups = [];

                foreach ($block['groups'] as $group) {
                    $groupName = $blockName;
                    $element = [];
                    $elementArray = $group['element'];
                    foreach ($elementArray as $elem) {
                        $groupData = [
                            'block_name' => $blockName,
                            'multiple' => $block['multiple'],
                            'item_max' => $block['item_max'],
                            'status' => $block['status'],
                            $groupName => [
                                'name' => $elem['name'],
                                'type' => $elem['type'],
                                'value' => $elem['value'],
                            ]
                        ];
    
                        $groups[] = $groupData;
                    }
                }
    
                $blockData[$blockName] = $groups;
            }
    
            $responseData[] = $blockData;
        }
    
        return $responseData;
    }
}