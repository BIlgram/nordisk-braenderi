<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBatchesTable extends Migration
{

    public function up()
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->integer('spirit_id');
            $table->integer('step');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('batches');
    }
}
