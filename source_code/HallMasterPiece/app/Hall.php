<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hall extends Model
{
    
    protected $fillable =['Hall_name',
    'capacity_of_hall',
    'Hall_location',
    'payment_method',
    'parking',
    'Average_price'];


    public function image(){
        return $this->hasMany('App\ImageHall','Hall_id');
    }

    public function comment(){
        return $this->hasMany('App\CommentHall');
    }
    public function rating(){
        return $this->hasMany('App\RatingHall');
    }
    
}
