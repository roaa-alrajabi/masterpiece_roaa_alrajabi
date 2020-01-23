import React,{Component}from 'react';
import { Link } from 'react-router-dom';
export default class Resultsearch extends Component{

    render(){
        const{Hall}=this.props
        return(
     <>
     
   <div className="card mr-2 mb-4 shadow p-3 mb-5 bg-white rounded ">
   <div className="card-body">
     <h5 className="card-title"style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>HallName:{Hall.Hall_name}</h5>
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>HallLocation:{Hall.Hall_location}</h5>
     <h5 className="card-title"style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>CapacityOfHall:{Hall.capacity_of_hall}</h5>
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>PaymentMethod:{Hall.payment_method}</h5>
     <h5 className="card-title"style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>Parking:{Hall.parking}</h5>
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>AveragePrice:{Hall.Average_price}</h5>
     <Link  to={`/Moredetail/${this.props.Hall.id}`} type="button" className="btn btn-primary"style={{'backgroundColor':'#e25368','color':'black',"fontFamily": 'Patrick Hand, cursive',"borderColor":"black"}} >more view</Link>
     </div>
    </div>
   <br></br>
    


    
    {/* <div className="card-deck">
    <div className="card"> 
    <img className="card-img-top" src={"/storage/"+this.props.Hall.image[0].path_image} style={{'width':'10%', 'height':"10%"}} /> */}
    {/* <div className="card-body">
    <h5 className="card-title">Hall_name:{Hall.Hall_name}</h5>
    <h5 className="card-title">Hall_location:{Hall.Hall_location}</h5>
    <h5 className="card-title">Average_price:{Hall.Average_price}</h5> */}
    {/* </div>
    </div> */}
    {/* </div> */} 
            </>
        )
    }
}

