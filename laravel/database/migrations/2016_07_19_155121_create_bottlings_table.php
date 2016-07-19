<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBottlingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bottlings', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('batch_id');
            $table->float('volume');
            $table->float('number');
            $table->float('remaining');
            $table->text('comment');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bottlings');
    }
}
