import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class updatecomment extends Component {

    state={
        Comments:[]
    }

    async componentDidMount() {
        const id=this.props.match.params.id
        let res = await axios.get(`/Editcomment/${id}`);
        //await console.log(res.data);
        await this.setState({ Comments: res.data});
        await console.log("Comments",this.state);
      }
      handleChange=e =>{
        
        const Comments={...this.state.Comments}
          Comments[e.currentTarget.name]=e.currentTarget.value 
        this.setState({
            Comments
        })
        console.log(e.target.name)
        console.log(e.target.value)
      };
      submit=e=>{
        e.preventDefault();
    //     const hall={
    //         Body:this.state.Comments.Body
    //   }
    //   console.log('hall:',hall)
      axios.put(`/updatecomment/${this.props.match.params.id}`,{
        Body:this.state.Comments.Body })
      .then((response) => {
           console.log('from handle image submit', response.data);
        //    this.props.history.push(`/Moredetail/${this.props.match.params.id}`);
        });
        
      };
      

render(){
    return(
        <>
        <h1>updatecomment</h1>
         <form onSubmit={this.submit}>
        <div className="form-row">
        <div className="form-group col-md-12">
        <input type="text" className="form-control "  name='Body' defaultValue={this.state.Comments.Body} onChange={this.handleChange}/>
        </div>
        </div>
        <input type="submit" className="btn btn-outline-dark  float-right " value="UpdateComment" />
        <Link  to={"/AllHallshomepages"}type="button" className="btn btn-primary float-right"style={{'backgroundColor':'#e25368','color':'black',"fontFamily": 'Patrick Hand, cursive',"borderColor":"black"}}>Back To Search</Link>

            </form>
        </>
    )
}
}