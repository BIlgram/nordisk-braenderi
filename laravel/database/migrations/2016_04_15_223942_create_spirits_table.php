<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSpiritsTable extends Migration
{

    public function up()
    {
        Schema::create('spirits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->decimal('abv');
            $table->text('recipe')->nullable();
            $table->dateTime('deleted_at');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('spirits');
    }
}
