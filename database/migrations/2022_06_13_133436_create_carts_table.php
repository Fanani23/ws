<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('customer_id')->constrained('customers')->onDelete('cascade');
            $table->string('code');
            $table->enum('discount_type', ['percent', 'nominal', 'null'])->nullable();
            $table->double('discount_amount')->nullable();
            $table->enum('coupon_type', ['percent', 'nominal', 'null'])->nullable();
            $table->double('coupon_amount')->nullable();
            $table->double('subtotal')->nullable();
            $table->double('discount_total')->nullable();
            $table->double('grand_total')->nullable();
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
        Schema::dropIfExists('carts');
    }
}
