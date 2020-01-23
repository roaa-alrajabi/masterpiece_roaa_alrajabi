<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/Hall','HallController@store')->name('store');
Route::get('/Moredetail/{id}','HallController@getallcomment')->name('Moredetail');
// Route::get('/Moredetails/{id}','HomeController@index')->name('Moredetails');

// Route::get('/Getdetail/{id}','CommentHallController@store')->name('Getdetail');
Route::post('/{id}/Addcomment','CommentHallController@store')->name('AddComment');
Route::delete('/Deletecomment/{id}','CommentHallController@destroy')->name('destroy');
Route::get('/Editcomment/{id}','CommentHallController@index')->name('Editcomment');
Route::put('/updatecomment/{id}','CommentHallController@update')->name('updatecomment');



Route::get('/AllHallshomepages','HomeController@index')->name('AllHallshomepages');
Route::get('/AllHallshomepage','HallController@index')->name('AllHallshomepage');
Route::post('/SearchHalls','HallController@search')->name('SearchHalls');
Route::get('/AllHallAdmin','HomeController@admin')->name('AllHallAdmin');
Route::get('/AllHallsAdmin','HallController@index')->name('AllHallsAdmin');
Route::delete('/DeleteHalls/{id}','HallController@destroy')->name('destroy');
Route::get('/EditHall/{id}','HallController@edit')->name('edit');
Route::put('/updateHall/{id}','HallController@update')->name('update');


// Route::get('/AllHall','HallController@index')->name('/AllHall');
// Route::get('/Hall','HallController@index')->name('/Hall');
// Route::get('/AllHall/{id}','HallController@edit')->name('edit');
// Route::get('/AllHalls','HomeController@index')->name('index');
// Route::get('/Edit','HomeController@index')->name('index');