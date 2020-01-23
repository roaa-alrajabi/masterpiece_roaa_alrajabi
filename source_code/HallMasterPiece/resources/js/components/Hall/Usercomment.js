import React,{Component}from 'react';
import { Link } from 'react-router-dom';
export default class Usercomment extends Component{
   
   


    
    render(){
        const{comments}=this.props
        return(
            <>

            <h3 style={{'color':'black',"fontFamily": 'Rancho, cursive'}}>{comments.user.name}</h3>
            <h1 style={{'color':'black',"fontFamily": 'Rancho, cursive'}}>{comments.Body}</h1>
            {/* <h1>{comments.id}</h1> */}

           <br></br>
           <Link  to={`/Editcomment/${this.props.comments.id}`}type="button" className="btn btn-primary float-right "style={{'backgroundColor':'#e25368','color':'black',"fontFamily": 'Patrick Hand, cursive',"borderColor":"black"}}>Edite</Link>
           {/* <input onClick={this.props.HandelEdit.bind(this,this.props.comments.id)} type="button" className="btn btn-primary" style={{'backgroundColor':'#e25368','color':'black',"fontFamily": 'Patrick Hand, cursive',"borderColor":"black"}} value="update"/> */}
           <button onClick={this.props.Handeldelete.bind(this,this.props.comments.id)} type="button" className="btn btn-primary float-right "style={{'backgroundColor':'#e25368','color':'black',"fontFamily": 'Patrick Hand, cursive',"borderColor":"black"}}> Delete</button>
           <hr></hr>

            </>
        )
    }

}
