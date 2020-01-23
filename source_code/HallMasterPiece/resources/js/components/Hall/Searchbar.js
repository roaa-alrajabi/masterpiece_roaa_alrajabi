import React, { Component } from 'react';
import Resultsearch from "./Resultsearch";
export default class searchbar extends Component {
state={
    Average_price:'',
    Hall_location:'',
    Halls:[]
}
async componentDidMount() {
    let res=await axios.get('/AllHallshomepage')
    console.log(res.data)
        this.setState({Halls: res.data});
       console.log(this.state)
   }
    handleChange=e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
        console.log(e.target.name)
     };

     submit= e=>{
        e.preventDefault();
        axios.post('/SearchHalls',{Hall_location:this.state.Hall_location,            
            Average_price:this.state.Average_price})
        .then((response) => {
            this.setState({Halls: response.data})
          console.log('from handle image submit', response.data);
       });     
       };

    //    Submit = async (e) => {
    //     e.preventDefault();
    //     let res = await axios.post("'/SearchHalls'" + this.state.Hall_location);
    //     console.log(res.data)
    //    }
     

    render(){
        return(
            <>
    <form onSubmit={this.submit} className="form-inline d-flex justify-content-center align-items-center">
    {/* <div className="form-row"> */}
    <div className="form-group mx-sm-1 mb-2 ">
    
       <select  value={this.state.value} name='Hall_location' className="form-control selcls" onChange={this.handleChange}>
         <option value=''defaultValue>Choise Location </option>
           <option value="Amman" name='Amman'>Amman</option>
           <option value="Zarqa" name='Zarqa'>Zarqa</option>
           <option value="Irbid" name='Irbid'>Irbid</option>
        </select>
        </div>
        <div className="form-group mx-sm-1 mb-2  ">
        
    <select value={this.state.value} name='Average_price'  className="form-control inputstl" onChange={this.handleChange} >
             <option value=''defaultValue>Average price</option>
             <option value="expeinsive">Expeinsive</option>
             <option value="cheap">Cheap</option>
             <option value="Good Deal">Good Deal</option>
    </select>
    </div>
    {/* </div> */}
     <input type="submit" className="btn btn-danger mb-2" value="Search" style={{'width':'12%' ,'height':'10%','backgroundColor':'#e25368','color':'black',"fontFamily": 'Patrick Hand, cursive',"borderColor":"black"}}/>
    </form>
    <br></br>
    <div>
<div className='col'>
{(this.state.Halls.length == 0 ) && <h1>No Result search</h1>}
</div>
<div className='row'>
    {this.state.Halls.map((Hall=> 
            <Resultsearch Hall={Hall} key={Hall.id} />))}

</div>
    </div>
    
            </>
        )
    }
}

