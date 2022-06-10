<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'phone',
        'job'
    ];

    public function presences()
    {
        return $this->hasMany(Presence::class);
    }

    public function presenced()
    {
        return $this->presences()->whereDate('when', '>=', date('Y-m-d'));
    }
}
