<?php

namespace App\Http\Controllers;

use App\ImageHall;
use App\Hall;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class ImageHallController extends Controller
{
    public function __construct() {
		$this->middleware('auth');
}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
  
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ImageHall  $imageHall
     * @return \Illuminate\Http\Response
     */
    public function show(ImageHall $imageHall)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ImageHall  $imageHall
     * @return \Illuminate\Http\Response
     */
    public function edit(ImageHall $imageHall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ImageHall  $imageHall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImageHall $imageHall)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ImageHall  $imageHall
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImageHall $imageHall)
    {
        //
    }
}
