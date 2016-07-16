<?php

use App\Models\Batch;
use Illuminate\Database\Seeder;

class BatchesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Batch::truncate();

        Batch::create([
            "name" => "Rom white.160416.A",
            "spirit_id" => 2,
            "step" => 0,
        ]);

        Batch::create([
            "name" => "Nordisk gin.160416.A",
            "spirit_id" => 1,
            "step" => 2,
        ]);
    }
}
