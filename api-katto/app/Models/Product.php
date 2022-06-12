<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'code',
        'name',
        'price',
        'fee_commission_rupiah',
        'fee_commission_percent',
        'image',
    ];

    public function category()
    {
      return $this->belongsTo(Category::class);
    }
}