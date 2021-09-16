<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public const OWNER = 'owner';
    public const CHEF = 'chef';
    public const CASHIER = 'cashier';
    public const WAITER = 'waiter';
    public const MEMBER = 'member';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
    ];

    public function user()
    {
        return $this->hasMany(User::class, 'role_id');
    }
}
