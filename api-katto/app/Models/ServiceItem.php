<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'cart_id',
        'employee_id',
        'product_id',
        'discount_type',
        'discount_amount',
        'price',
        'net_price',
        'datetime',
    ];

    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
