<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Customer;
use App\Models\Job;
use App\Models\LoginActivity;
use App\Models\Presence;
use App\Models\User;
use Illuminate\Console\Command;

class runFactory extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'run:factory';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'To run factory';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        User::factory()->count(5)->create();
        Customer::factory()->count(50)->create();
        Job::factory()->hasEmployees(10)->count(5)->create();
        Category::factory()->hasProducts(10)->count(5)->create();
        LoginActivity::factory()->count(20)->create();
        Presence::factory()->count(40)->create();
    }
}
