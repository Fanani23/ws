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
        'code',
        'subtotal',
        'grand_total',
        'datetime',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function serviceItems()
    {
        return $this->hasMany(ServiceItem::class);
    }
}
