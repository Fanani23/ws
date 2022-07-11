<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $with = ['category'];

    protected $fillable = [
        'category_id',
        'code',
        'name',
        'price',
        'commission_type',
        'commission_value',
        'image',
    ];

    public function category()
    {
      return $this->belongsTo(Category::class);
    }
}
