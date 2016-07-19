<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSpiritStateTable extends Migration
{

    public function up()
    {
        Schema::create('spirit_state', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('state_id');
            $table->bigInteger('spirit_id');
        });
    }

    public function down()
    {
        Schema::drop('spirit_state');
    }

}
