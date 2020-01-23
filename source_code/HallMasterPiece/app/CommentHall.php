<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommentHall extends Model
{
    protected $fillable =['Body','user_id','hall_id'];

    protected $table = 'commentshalls';
    public function hall(){
        return $this->belongsTo('App\Hall');
    }
    public function user(){
        return $this->belongsTo('App\User');
    }
}
