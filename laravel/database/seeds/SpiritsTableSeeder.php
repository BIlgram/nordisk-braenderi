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
            "name" => "Test",
            "abv" => 100,
            "recipe" => "Lorem Ipsum",
            "process" => ["1", "2", "3", "4", "5", "6", "7"]
        ]);

        Spirit::create([
            "name" => "Nordisk Gin",
            "abv" => 40,
            "recipe" => "Blade og hør",
            "process" => ["7", "3", "5", "6"]
        ]);

        Spirit::create([
            "name" => "Rom white",
            "abv" => 44.8,
            "recipe" => "Ost og edike",
            "process" => ["1", "2", "3", "5", "6"]
        ]);
    }
}
