<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSpiritsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spirits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->decimal('abv');
            $table->string('recipe')->nullable();
            $table->boolean('active')->default(true);
            $table->dateTime('deleted_at');
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
        Schema::drop('spirits');
    }
}
