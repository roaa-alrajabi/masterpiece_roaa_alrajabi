<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;


class AdminController extends Controller
{
    public function __construct()
{
   $this->middleware('admin');
}
}
