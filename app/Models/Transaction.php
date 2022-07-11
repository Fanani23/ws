<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'customer_id',
        'code',
        'discount_type',
        'discount_amount',
        'coupon_type',
        'coupon_amount',
        'subtotal',
        'discount_total',
        'grand_total',
        'method',
        'status',
        'datetime',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function transactionItems()
    {
        return $this->hasMany(TransactionItem::class);
    }

    public function notification()
    {
        return $this->hasOne(Notification::class);
    }
}
