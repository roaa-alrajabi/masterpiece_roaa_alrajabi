import React, { Component } from 'react';
import Hall from '../components/Hall/Hall'; 
import { BrowserRouter, Route } from 'react-router-dom';
import Halls from './Hall/Halls';
import AllHalls from './Hall/AllHalls';
import EditHall from "./Hall/EditHall";
import AllHallAdmin from "./Hall/AllHallAdmin";
import Searchbar from './Hall/Searchbar';
import Moredetail from './Hall/Moredetail';
import updatecomment from './Updatecomment';
import Rating from './Hall/rating';
export default class App extends Component {
    render() {
        return (
            <>
            {/* <Searchbar/> */}
            <BrowserRouter>
            {/* <Hall/> */}
            <Rating/>
            
            <Route path="/home" component={Hall} exact/>
            <Route path={"/Moredetail/:id"} component={Moredetail}exact/>
            <Route path="/AllHallshomepages" component={Searchbar}exact/>
            <Route path={"/EditHall/:id"} component={EditHall} exact />
            <Route path={"/Editcomment/:id"} component={updatecomment}exact/>
            <Route path={"/AllHallAdmin"} component={AllHallAdmin}exact/>
             
            </BrowserRouter>
            </>
        );
    }
}


