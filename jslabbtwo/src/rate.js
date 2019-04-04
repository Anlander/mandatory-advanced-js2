import React, { Component } from 'react';
import axios from 'axios';

class Rate extends Component {
  constructor(){
    super();
    this.state = {
      title:"",
      director:"",
      description:"",
      rating:"",

    }
  }
  componentDidMount(){
    axios.get(`http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/${this.props.match.params.id}`)
    .then(movie=>{
      console.log(movie)
      this.setState({
        title:movie.data.title,
        director:movie.data.director,
        description:movie.data.description,
        rating:movie.data.rating,

      })
    })
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
    console.log(this.state)
    if(this.state.title.length === 0){
      return null
    }
    return (
      <form className="form">
        <input name="title" type="text" className="edit-title" value={this.state.title} onChange={(e)=> this.getinputvalue(e)}/>
        <input name="director" type="text" className="edit-director" value={this.state.director}  onChange={(e)=> this.getinputvalue(e)}/>
        <textarea name="description" type="text" className="edit-textarea" value={this.state.description}  onChange={(e)=> this.getinputvalue(e)}></textarea>
        <input  name="rating" type="number" className="edit-rating" value={this.state.rating}  onChange={(e)=> this.getinputvalue(e)}/>
        <button className="edit-button" onClick={(e) => this.click(e)}>Edit</button>
      </form>

    );
  }
}

export default Rate;
