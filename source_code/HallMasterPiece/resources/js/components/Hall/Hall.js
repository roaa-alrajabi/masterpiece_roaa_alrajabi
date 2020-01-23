import React, { Component } from 'react';
// import AllHalls from './AllHalls';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Hall extends Component {
   state={  
    Hall_name:'',
    capacity_of_hall:'',
    Hall_location:'',
     payment_method:'',
     parking:'',
     image:null,
    Average_price:'',
     Hall:[]
   }


  //  componentDidMount() {
  //   axios.get('/AllHall')
  //     .then(response => this.setState({Hall: response.data}))
  //     .catch(err => console.log(err))
  // }
  
 

  // Handeldelete=async id =>{
  //   const Id = hall => hall.id !== id;
  //   const Delete = this.state.Hall.filter(Id);
  //   this.setState({ Hall: Delete });
  //   // console.log('delete the hall')
  //  let res = axios.delete(`/DeleteHalls/${id}`);
  // //  console.log("delete response: ", res);
  // }
  
   handleChange=e =>{
      this.setState({
          [e.target.name]:e.target.value
      })
      console.log(e.target.value)
      console.log(e.target.name)
   };
   submit=e=>{
    e.preventDefault();
    // const hall={
    //       Hall_name:this.state.Hall_name,
    //     capacity_of_hall:this.state.capacity_of_hall,
    //     Hall_location:this.state.Hall_location,
    //     payment_method:this.state.payment_method,
    //     parking:this.state.parking,
    //     Iamge:this.state.Iamge,
    //     Average_price:this.state.Average_price
    // };
    // console.log('hall:',hall)
       axios.post('/Hall',{
        //  all value want to post it  to database
        Hall_name:this.state.Hall_name,
        capacity_of_hall:this.state.capacity_of_hall,
         Hall_location:this.state.Hall_location,  
        payment_method:this.state.payment_method,
       parking:this.state.parking,
       Average_price:this.state.Average_price,
       img:this.state.image,
       })
    

    .then((response) => {
      console.log('from handle image submit', response.data);
      this.props.history.push('/AllHallAdmin');
   });
         
   };

   onChange = e => {
    console.log('upload image')
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
          return;
    this.createImage(files[0]);
  }
  createImage= file=> {
    let reader = new FileReader();
    reader.onload = e => {
        this.setState({
          image: e.target.result
        });
        // console.log(e.target.result)
    };
    reader.readAsDataURL(file);
}



    render() {

        // console.log('hall',this.state.Hall)// to insure if the data insert  into  array 
        return (
           <>
         <h2>Add Halls </h2>
        <form className="border rounded-lg " onSubmit={this.submit}  >
      <div className="form-row">
       <div className="form-group col-md-6">
      <label htmlFor="input">HallName</label>
      <input type="text" className="form-control " placeholder="HallName" id="inputHallName"   name='Hall_name'value={this.state.value} onChange={this.handleChange} required/>
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="input">CapacityOfHall</label>
    <input type="number" className="form-control " id="inputCapacityOfHall" placeholder="CapacityOfHall" name='capacity_of_hall'value={this.state.value} onChange={this.handleChange} required/>
    </div>
    <div className="form-group col-md-12">
    <label>
      Hall location
      </label>
       <select  value={this.state.value} name='Hall_location' className="form-control selcls" onChange={this.handleChange} required>
         <option value=''defaultValue>Choise Location </option>
           <option value="Amman" name='Amman'>Amman</option>
           <option value="Zarqa" name='Zarqa'>Zarqa</option>
           <option value="Irbid" name='Irbid'>Irbid</option>
        </select>
        </div>
    <label>
     
     payment method
     </label>
    <select value={this.state.value}  name='payment_method'className="form-control selcls" onChange={this.handleChange} required>
    <option value=''defaultValue>payment_method</option>
        <option value="cash" name='cash'>Cash</option>
        <option value="Visa" name='Visa'>Visa</option>
        <option value="MasterCard"name='MasterCard'>MasterCard</option>
    </select>
    
    <label>
      Parking
      </label>
    <select value={this.state.value} className="form-control selcls" name='parking' onChange={this.handleChange} required>
        <option value=''defaultValue>parking</option>
        <option value="outdoor parking" name='outdoor parking'>Outdoor parking</option>
        <option value="valet parking"name='valet parking'>Valet parking</option>
     </select>
    
    <label>
     Averag Price
     </label>
    <select value={this.state.value} name='Average_price'  className="form-control inputstl" onChange={this.handleChange} required >
             <option value=''defaultValue>Average_price</option>
             <option value="expeinsive">Expeinsive</option>
             <option value="cheap">Cheap</option>
             <option value="Good Deal">Good Deal</option>
    </select>
    <div className="form-group ">
      <br></br>
    <label htmlFor="input" >Add Iamge</label>
  
    <input type="file" name='image'  onChange={this.onChange} required/>
    </div>
    </div>  
    
        <input type="submit" className="btn btn-outline-dark  float-right " value="Add New Hall" />

        </form> 
          {/* {this.state.Hall.map((Hall=>
           <AllHalls  Hall={Hall} key={Hall.id}/>))} */}
         {/* <AllHalls Hall={this.state.Hall} Handeldelete={this.Handeldelete}   /> */}
          </>
        );
    }
}