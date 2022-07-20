<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'customer_id',
        'payment_method_id',
        'code',
        'discount_type',
        'discount_amount',
        'coupon_type',
        'coupon_amount',
        'subtotal',
        'discount_total',
        'grand_total',
        'datetime',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }
}
