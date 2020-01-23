import React, { Component } from 'react';
// import AllHalls from './AllHalls';
import Halls from "./Halls";
export default class AllHallAdmin extends Component {
state={
    Hall:[]
}
async componentDidMount() {
   let res=await axios.get('/AllHallsAdmin')
   console.log(res.data)
       this.setState({Hall: res.data});
      
  }

  Handeldelete=async id =>{
    const Id = hall => hall.id !== id;
    const Delete = this.state.Hall.filter(Id);
    this.setState({ Hall: Delete });
    // console.log('delete the hall')
   let res = axios.delete(`/DeleteHalls/${id}`);
  //  console.log("delete response: ", res);
  }
   render(){
    //    console.log("hall",this.state.Hall)
    if(this.state.Hall.length == 0 ) return <h1>Loading...</h1>
       return(
           <>
           <div className='col'>
           <div className='row'>
           {this.state.Hall.map((Hall=> 
            <Halls Hall={Hall} key={Hall.id} Handeldelete={this.Handeldelete}/>))}
            </div>
            </div>
           </>
       )
   }
}