<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('customer_id');
            $table->string('code');
            $table->enum('discount_type', ['percent', 'nominal'])->nullable();
            $table->double('discount_amount')->nullable();
            $table->enum('coupon_type', ['percent', 'nominal'])->nullable();
            $table->double('coupon_amount')->nullable();
            $table->double('subtotal')->nullable();
            $table->double('discount_total')->nullable();
            $table->double('grand_total')->nullable();
            $table->string('method');
            $table->string('status');
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
        Schema::dropIfExists('transactions');
    }
}
