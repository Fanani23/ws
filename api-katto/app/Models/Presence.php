<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presence extends Model
{
    use HasFactory;

    protected $fillable = [
        'coming_time',
        'return_time',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
