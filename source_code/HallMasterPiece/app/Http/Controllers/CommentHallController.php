<?php

namespace App\Http\Controllers;

use App\CommentHall;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Hall;
use Illuminate\Http\Request;

class CommentHallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
       $hall =CommentHall::findOrFail($id);
        return response()->json($hall);
        //return $id;//id for hall
        // $hall =Hall::findOrFail($id);
        // $user_id=Auth::id();
        // return $hall;
      

        // $allcomment=CommentHall::with('user')->where('id',$id)->get();
        // return response()->json($allcomment);

        // $halls=CommentHall::with('hall')->with('user')->get();
        // return response()->json($halls);

        // $hall = CommentHall::find($id);
        // //  return $hall;
        // // $images = ImageHall::with('hall')->get();
        // // return response()->json($hall);
        // $comments = $hall->comments()->with('user')->get();
        //         return response()->json($hall);

      
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
    public function store(Request $request,$id)
    {
        $hall =Hall::find($id);
        //    return $hall->id;
       
       $user_id=Auth::id();
    //    $hall=Hall::all();
      if($user_id){
        CommentHall::create([
            'Body' =>$request->input('Body'),
            'user_id'=>$user_id,
            'hall_id'=>$hall->id,
            ]);
            return response()->json("success submit");
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CommentHall  $commentHall
     * @return \Illuminate\Http\Response
     */
    public function show(CommentHall $commentHall)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CommentHall  $commentHall
     * @return \Illuminate\Http\Response
     */
    public function edit(CommentHall $commentHall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CommentHall  $commentHall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $CommentHall=CommentHall::find($id);
        $CommentHall->Body=$request->get('Body');
        $CommentHall->save();
        return response()->json('Product Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CommentHall  $commentHall
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        $user_id=Auth::id();
        if($user_id){$delete=CommentHall::where('id',$id)->delete();
            return response()->json('success delete');
        }
        
    }
}
