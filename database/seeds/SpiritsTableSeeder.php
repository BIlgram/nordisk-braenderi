<?php

use App\Models\Spirit;
use Illuminate\Database\Seeder;

class SpiritsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Spirit::truncate();

        Spirit::create([
           "name" => "Nordisk Gin",
            "active" => true,
            "abv" => 40
        ]);


        Spirit::create([
            "name" => "Rom white",
            "active" => true,
            "abv" => 44.8
        ]);
    }
}
