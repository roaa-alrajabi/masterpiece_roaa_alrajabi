<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageHall extends Model
{
    protected $fillable =['path_image','Hall_id'];
    protected $table = 'imageshalls';
    public function hall(){
        return $this->belongsTo('App\Hall','Hall_id');
    }


}
