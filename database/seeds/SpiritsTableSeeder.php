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
            "abv" => 40,
            "recipe" => "Blade og hør"
        ]);
        
        Spirit::create([
            "name" => "Rom white",
            "abv" => 44.8,
            "recipe" => "Ost og edike"
        ]);
    }
}
