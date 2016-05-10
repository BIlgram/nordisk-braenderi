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
        State::create(["name" => "created"]);
        State::create(["name" => "distilled" ]);
        State::create(["name" => "diluted" ]);
        State::create(["name" => "filtered" ]);
    }
}
