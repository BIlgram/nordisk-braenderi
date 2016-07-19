<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDilutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dilutions', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('batch_id');
            $table->text('comment');
            $table->float('startweight');
            $table->float('startabv');
            $table->float('tableabv');
            $table->float('desiredabv');
            $table->float('tabledesabv');
            $table->float('pureabv');
            $table->float('afterweight');
            $table->float('addwater');

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
        Schema::drop('dilutions');
    }
}
