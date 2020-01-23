<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RatingHall extends Model
{
    protected $fillable =['rating_value','Hall_id'];

    public function hall(){
        return $this->belongsTo('App\Hall');
    }
    public function user(){
        return $this->belongsTo('App\User');
    }
}
