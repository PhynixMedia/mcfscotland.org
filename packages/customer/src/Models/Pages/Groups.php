<?php

namespace Customer\App\Models\Pages;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Groups extends Model
{
    //
    protected $table = 'web_page_groups';

    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'id',
        'block_id',
        'name',
        'element',
        'status',
    ];

    public function blocks(){
        return $this->belongsTo('Customer\App\Models\Pages\Blocks', 'id', 'block_id');
    }

    protected $casts = [
        'element' => 'array',
    ];

    protected static function booted()
    {
        static::creating(function ($group) {
            $group->uuid = Str::uuid()->toString();
        });
    }

}
