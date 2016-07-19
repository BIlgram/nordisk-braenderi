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

        $spirit = Spirit::create([
            "name" => "Nordisk Gin",
            "abv" => 40,
            "recipe" => "Blade og hør",
        ]);

        $spirit->states()->attach([2,3,5,6]);

        $spirit = Spirit::create([
            "name" => "Rom white",
            "abv" => 44.8,
            "recipe" => "Ost og edike",
        ]);

        $spirit->states()->attach([1,2,3,4,5,6,7]);

        $spirit = Spirit::create([
            "name" => "Test",
            "abv" => 100,
            "recipe" => "Lorem Ipsum",
        ]);

        $spirit->states()->attach([1,2,3,5,6]);
    }
}
