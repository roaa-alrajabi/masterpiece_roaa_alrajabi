import React, { Component } from 'react';
// import Hall from './Hall';
// import Hall from './Hall';
import { Link } from 'react-router-dom';


export default class EditHall extends Component {

  constructor(props) {
    super(props);
    this.state = {
    Halls:[] ,
    };
}
async componentDidMount() {
  const id=this.props.match.params.id
  let res = await axios.get(`/EditHall/${id}`);
  //await console.log(res.data);
  await this.setState({ Halls: res.data[0]});
  await console.log("Halls",this.state);

}
handleChange=e =>{
  const Halls={...this.state.Halls}
    Halls[e.currentTarget.name]=e.currentTarget.value 
  this.setState({
    Halls
  })
  console.log(e.target.id)
  console.log(e.target.value)
};

submit=e=>{
  e.preventDefault();
  const hall={
        Hall_name:this.state.Halls.Hall_name,
      capacity_of_hall:this.state.Halls.capacity_of_hall,
      Hall_location:this.state.Halls.Hall_location,
      payment_method:this.state.Halls.payment_method,
      parking:this.state.Halls.parking,
      Average_price:this.state.Halls.Average_price
  };
  console.log('hall:',hall)
  
     axios.put(`/updateHall/${this.props.match.params.id}`,{
       Hall_name:this.state.Halls.Hall_name,
      capacity_of_hall:this.state.Halls.capacity_of_hall,
      Hall_location:this.state.Halls.Hall_location,
      payment_method:this.state.Halls.payment_method,
      parking:this.state.Halls.parking,
      Average_price:this.state.Halls.Average_price})
     .then((response) => {
          // console.log('from handle image submit', response.data);
          this.props.history.push('/AllHallAdmin');
       });
       
    // console.log()
 };
 
    render() {
      // console.log(this.props.match.params.id)
      // console.log(this.props.Hall.Hall_name)
      // console.log(this.state.Halls.Hall_Name)

        // console.log(this.state.Halls)// to insure if the data insert  into  array
        // console.log("roaa") 
        return (
           <>      
              
           {/* {this.state.Halls.map((Hall=> */}
    {/* <div key={Hall.id}> */}
       <form onSubmit={this.submit} >
      <div className="form-row">
       <div className="form-group col-md-6">
      <label htmlFor="input">HallName</label>
      <input type="text" className="form-control " id="HallName"   name='Hall_name' defaultValue={this.state.Halls.Hall_name} onChange={this.handleChange}/>
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="input">CapacityOfHall</label>
    <input type="number" className="form-control " id="inputCapacityOfHall"  name='capacity_of_hall'defaultValue={this.state.Halls.capacity_of_hall} onChange={this.handleChange}/>
    </div>
    <label>
      Hall_location:
      </label>
       <select  value={this.state.Halls.Hall_location} name='Hall_location'  id="Hall_location"className="form-control selcls"onChange={this.handleChange} >
         <option value=''defaultValue>Choise Location </option>
           <option value="Amman" name='Amman'>Amman</option>
           <option value="Zarqa" name='Zarqa'>Zarqa</option>
           <option value="Irbid" name='Irbid'>Irbid</option>
        </select>
    <label>
     payment_method:
     </label>
    <select value={this.state.Halls.payment_method}  id="payment_method" name='payment_method'className="form-control selcls"onChange={this.handleChange} >
    <option value=''>payment_method</option>
        <option value="cash" name='cash'>cash</option>
        <option value="Visa" name='Visa'>Visa</option>
        <option value="MasterCard"name='MasterCard'>MasterCard</option>
    </select>
    
    <label>
      parking:
      </label>
    <select value={this.state.Halls.parking} className="form-control selcls"id="parking" name='parking' onChange={this.handleChange} >
        <option value=''defaultValue>parking</option>
        <option value="outdoor parking" name='outdoor parking'>outdoor parking</option>
        <option value="valet parking"name='valet parking'>valet parking</option>
     </select>
    
    <label>
     Average_price:
     </label>
    <select value={this.state.Halls.Average_price} name='Average_price' id="Average_price"  className="form-control inputstl" onChange={this.handleChange} >
             <option value=''defaultValue>Average_price</option>
             <option value="expeinsive">expeinsive</option>
             <option value="cheap">cheap</option>
             <option value="Good Deal">Good Deal</option>
    </select>    

    </div>  
    <br></br>
        <input type="submit" className="btn btn-success" value="Update" />
        </form> 
      {/* </div> */}
     
          {/* //  ))} */}
          </>
        );
    }
}