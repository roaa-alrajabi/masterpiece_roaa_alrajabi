import React,{Component}from 'react';
import Usercomment from './Usercomment';
import { Link } from 'react-router-dom';

export default class Moredetail extends Component{
    state={
        Body:"",
        Comments:[],
        // comment:[]
    }
    async componentDidMount() {
        const id=this.props.match.params.id
    let res=await axios.get(`/Moredetail/${id}`)
    console.log("data",res.data)
        this.setState({Comments: res.data});
       console.log("the state",this.state)
   }
       handleChange=e =>{
        this.setState({
            Body :e.target.value
        })
        console.log(e.target.value)
        console.log(e.target.name)
     };
     submit=e=>{
        const id=this.props.match.params.id
        e.preventDefault();
        axios.post(`/${id}/Addcomment`,
        {Body:this.state.Body})
        .then((response) => {
            // this.setState({comment: response.data})
          console.log('succese to add comment ', response.data);

          
       });   
        // console.log('Comment:',this.state)
     }
     Handeldelete=async id =>{
         console.log(id)
        const Id = comment => comment.id !== id;
        const Delete = this.state.Comments.filter(Id);
        this.setState({ Comments: Delete });
        console.log('delete the comment')
       let res = axios.delete(`/Deletecomment/${id}`);
       console.log("delete response: ", res);
      }

    render(){
        // console.log('comment:',this.state.Comments)
        return(
<>
<Link  to={"/AllHallshomepages"}type="button" className="btn btn-primary float-right"style={{'backgroundColor':'#e25368','color':'black',"fontFamily": 'Patrick Hand, cursive',"borderColor":"black"}}>Back To Search</Link>

             <h2>Comments</h2>
            <hr></hr>
            <form onSubmit={this.submit}>
        <div className="form-row">
        <div className="form-group col-md-12">
        <input type="text" className="form-control " placeholder="Add Your Comment" name='Body'  onChange={this.handleChange}/>
        </div>
        </div>
        <input type="submit" className="btn btn-outline-dark  float-right " value="Add Comment" />
            </form>
           
    {this.state.Comments.map((comments,id)=> 
            <Usercomment comments={comments} key={id} Handeldelete={this.Handeldelete}  />)}


            </>
        )
    }

}
