<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Response;
use Inertia\Inertia;

class Dashboard extends Controller
{
    public function index()
    {
        return $this->render();
    }

    private function render()
    {
        $roleName = auth()->user()->role->name;

        switch ($roleName) {
            case Role::OWNER:
                return Inertia::render('Owner/Dashboard');
            case Role::CHEF:
                return Inertia::render('Chef/Dashboard');
            case Role::CASHIER:
                return Inertia::render('Cashier/Dashboard');
            case Role::WAITER:
                return Inertia::render('Waiter/Dashboard');
            case Role::MEMBER:
                return Inertia::render('Member/Dashboard');
            default:
                return abort(Response::HTTP_NOT_FOUND);
        }
    }
}
