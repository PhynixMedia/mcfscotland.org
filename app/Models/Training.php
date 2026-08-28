<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'title', 'address'
    ];
}
