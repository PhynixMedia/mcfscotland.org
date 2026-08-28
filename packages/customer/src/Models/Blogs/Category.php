<?php

namespace Customer\App\Models\Blogs;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $table = 'web_blogs_category';

    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'category',
        'show_in_menu',
        'status'
    ];

    protected static function booted()
    {
        static::creating(function ($block) {
            $block->uuid = Str::uuid()->toString();
        });
    }

    public function blogs(){
        return $this->hasMany('Customer\App\Models\Blogs\Blogs', 'category_id', 'id');
    }
}