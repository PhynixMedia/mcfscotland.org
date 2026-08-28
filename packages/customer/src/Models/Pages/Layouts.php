<?php

namespace Customer\App\Models\Pages;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Layouts extends Model
{
    //
    protected $table = 'web_page_layouts';

    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'label',
        'layout',
        'status',
    ];

    public function templates(){
        return $this->belongsTo('Customer\App\Models\Pages\Templates', 'id', 'layout_id');
    }

    protected static function booted()
    {
        static::creating(function ($layout) {
            $layout->uuid = Str::uuid()->toString();
        });
    }
}
