import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class rating extends Component {
state={
    rating:0,
    star:[],
    maxrating:5
}
Rating= e =>{
    console.log("star ", e.target.value)
    console.log("name ", e.name)

    this.setState({
        rating:e.target.value
    });
    

}

render(){
    const{rating}=this.state
    return(
        <>
        <form>
    <div className="rate">
    <input type="radio" id="star5" name="rating1" value={5} onClick={this.Rating}/>
    <label htmlFor="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rating2" value={4} onClick={this.Rating}/>
    <label htmlFor="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rating3" value={3} onClick={this.Rating} />
    <label htmlFor="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rating4" value={2} onClick={this.Rating}/>
    <label htmlFor="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rating5" value={1} onClick={this.Rating}/>
    <label htmlFor="star1" title="text">1 star</label>
  </div>
        </form>
        
        </>
    )
}
}