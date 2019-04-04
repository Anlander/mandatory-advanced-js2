import React, { Component } from 'react';
import axios from 'axios';

class Newmovie extends Component {
  constructor(){
    super();
    this.state = {
      title:"",
      director:"",
      description:"",
      rating:"",
      redirect:false

    }
  }

    getinputvalue(e){
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    click(e){
      e.preventDefault();
      const movie = {
        title:this.state.title,
        director:this.state.director,
        description:this.state.description,
        rating:this.state.rating
      }
      axios.post("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/",movie)
      .then(res=>console.log(res))
    }
  render(){
    return (
      <form className="form-new">
        <input className="input-title" name="title" type="text" placeholder='Title'  onChange={(e)=> this.getinputvalue(e)}/>
        <input className="input-director" name="director" type="text" placeholder='Director' onChange={(e)=> this.getinputvalue(e)}/>
        <textarea className="input-textarea" name="description" type="text" placeholder='Description' onChange={(e)=> this.getinputvalue(e)}></textarea>
        <input  className="input-rating" name="rating" type="number" placeholder='Rating' onChange={(e)=> this.getinputvalue(e)}/>
        <button className="input-add" onClick={(e) => this.click(e)}>Add</button>
      </form>

    );
  }
}

export default Newmovie;
