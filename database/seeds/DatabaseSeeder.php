<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(SpiritsTableSeeder::class);
        $this->call(BatchesTableSeeder::class);
        $this->call(StatesTableSeeder::class);
    }
}
