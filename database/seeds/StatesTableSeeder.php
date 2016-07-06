<?php

use App\Models\State;
use Illuminate\Database\Seeder;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         State::create(["name" => "Mæskning"]);
         State::create(["name" => "Destillering"]);
         State::create(["name" => "Fortynding"]);
         State::create(["name" => "Lagring"]);
         State::create(["name" => "Filtrering"]);
         State::create(["name" => "Tapning"]);
         State::create(["name" => "Blanding"]);
    }
}
