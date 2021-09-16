<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->createRoleWithUser(Role::OWNER);
        $this->createRoleWithUser(Role::CHEF);
        $this->createRoleWithUser(Role::CASHIER);
        $this->createRoleWithUser(Role::WAITER);
        $this->createRoleWithUser(Role::MEMBER);
    }

    private function createRoleWithUser(string $role)
    {
        return Role::factory()->state([
            'name' => $role
        ])
            ->has(User::factory()
                ->state([
                    'name' => Str::ucfirst($role),
                    'email' => $role . '@mail.com',
                ]))
            ->create();
    }
}
