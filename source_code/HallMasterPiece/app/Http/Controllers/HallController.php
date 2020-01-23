<?php

namespace App\Http\Controllers;

use App\Hall;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\ImageHall;
use Image;


class HallController extends Controller
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
        $hall = Hall::with('image')->get();
        // $images = ImageHall::with('hall')->get();
        return response()->json($hall);
        
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
        // return $request->input('img');
        if($request->get('img'))
        {
          $image = $request->get('img');
          $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
          Image::make($request->get('img'))->save(public_path('storage/').$name);
        }
        // return $name;
        
        $this->validate($request,[
            'Hall_name'=>'required',
            'capacity_of_hall'=>'required',
            'Hall_location'=>'required',
            'payment_method'=>'required',
            'parking'=>'required',
            'Average_price'=>'required'
        ]);
        $user_id=Auth::id();
        $hall=Hall::create([
            'Hall_name'=>$request->input('Hall_name'),
            'capacity_of_hall'=>$request->input('capacity_of_hall'),
            'Hall_location'=>$request->input('Hall_location'),
            'payment_method'=>$request->input('payment_method'),
            'parking'=>$request->input('parking'),
            'Average_price'=>$request->input('Average_price')            
        ]);
            // return $hall;
           $image= ImageHall::create([
               "Hall_id"=>$hall->id,
                "path_image"=>$name]);
        // Hall::where("Hall_name", input('Hall_name'))
        //Image_hall
        // $hall -> image() -> save()
        return $image;
        return response()->json("success submit");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $Hall = Hall::with('image')->get();
        // $images = ImageHall::with('hall')->get();
        return response()->json( $Hall);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $Hall=Hall::with('image')->where("id",$id)->get();

        return response()->json($Hall);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        // $Hall=Hall::with('image')->where("id",$id)->get();
        $Hall=Hall::find($id);
        $Hall->Hall_name=$request->get('Hall_name');
        $Hall->capacity_of_hall=$request->get('capacity_of_hall');
        $Hall->Hall_location=$request->get('Hall_location');
        $Hall->payment_method=$request->get('payment_method');
        $Hall->parking=$request->get('parking');
        $Hall->Average_price=$request->get('Average_price');
        $Hall->save();
        return response()->json('Product Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $task=Hall::where('id',$id)->delete();
        // return $task;
        return response()->json('success delete');
    }

    public function search(Request $request)
    {
        // return 'roaa';
        $Halllocation=$request->input('Hall_location');
        $Averageprice=$request->input('Average_price');

        $AllHall=Hall::all();
        $HallSearch=Hall::where(['Hall_location'=>$Halllocation,'Average_price'=>$Averageprice])->get();
        return response()->json($HallSearch);
    }


    public function getallcomment($id)
    {
        $hall =Hall::findOrFail($id);
        //return $hall;
        $comments = $hall->comment()->with('user')->get();
        return response()->json($comments);
        // return $comments;
    }
}
