<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('halls', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Hall_name');
            $table->integer('capacity_of_hall')->default(0);
            $table->enum('Hall_location', ['Amman', 'Irbid','Zarqa']);
            $table->enum('payment_method', ['cash', 'Visa','MasterCard']);
            $table->enum('parking',['outdoor parking','valet parking']);
            $table->enum('Average_price',['expeinsive','cheap','Good Deal']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('halls');
    }
}
