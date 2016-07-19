<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMashingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mashings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('batch_id');
            $table->text('quality');
            $table->float('sugar');
            $table->integer('ferment');
            $table->integer('amount');
            $table->text('comment');
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
        Schema::drop('mashings');
    }
}
