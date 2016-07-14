<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "name" => "admin",
            "email" => "admin@nb.dk",
            "password" => bcrypt('password'),
        ]);

        User::create([
            "name" => "far",
            "email" => "far@nb.dk",
            "password" => bcrypt('farpåtanken'),
        ]);
    }
}
