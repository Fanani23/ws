<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cart_id');
            $table->foreignId('employee_id');
            $table->foreignId('product_id');
            $table->enum('discount_type', ['percent', 'nominal'])->nullable();
            $table->double('discount_amount')->nullable();
            $table->double('price');
            $table->double('net_price');
            $table->dateTime('datetime');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_items');
    }
}
