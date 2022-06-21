<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presence extends Model
{
    use HasFactory;

    protected $fillable = [
        'datetime'
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
