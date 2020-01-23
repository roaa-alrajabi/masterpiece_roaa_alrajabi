import React,{Component}from 'react';
import { Link } from 'react-router-dom';
export default class Halls extends Component{
  
render(){
    // console.log("Child component: ",this.props.Hall.image[0].path_image)
    // console.log(this.props.Hall)
          {/* {Hall.Hall_name}  */}
                   {/* {Hall.capacity_of_hall}  
                  {Hall.Hall_location}
                  {Hall.payment_method}
                  {Hall.parking}  */}
                  {/* {(Hall.image.length)? <img src={"/storage/"+this.props.Hall.image[0].path_image} width="100px" height="100px"/>:"" } */}
                 {/* <img src={(this.props.Hall.image.length)?"/storage/"+this.props.Hall.image[0].path_image:""} width="100px" height="100px"/> */}
                  {/* {Hall.Average_price} */}
    const{Hall}=this.props
    return(
     <>
    <div className="card mr-2 mb-4 shadow p-3 mb-5 bg-white rounded ">
     {/* <img className="card-img-top" src={"/storage/"+this.props.Hall.image[0].path_image} style={{'width':'10%', 'height':"10%"}} /> */}
     <div className="card-body">
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>Hall_name:{Hall.Hall_name}</h5>
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>capacity_of_hall:{Hall.capacity_of_hall}</h5>
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>Hall_location:{Hall.Hall_location}</h5>
     <h5 className="card-title"style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>payment_method:{Hall.payment_method}</h5>
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>parking:{Hall.parking}</h5>
     <h5 className="card-title" style={{"fontFamily": 'Patrick Hand, cursive','fontWeight':'300'}}>Average_price:{Hall.Average_price}</h5>
     <Link  to={`/EditHall/${this.props.Hall.id}`} type="button" className="btn btn-primary"style={{'width':'40%' ,'marginRight':'20%'}} >update</Link>
     <button onClick={this.props.Handeldelete.bind(this,this.props.Hall.id)} type="button" className="btn btn-primary "style={{'width':'40%'}}> Delete</button>
     </div>
    </div>

                
     </>
    );
}
}