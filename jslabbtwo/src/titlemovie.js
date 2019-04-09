import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Rate extends Component {
  constructor(){
    super();
    this.state = {
      title:"",
      director:"",
      description:"",
      rating:"",
      error:false

    }
  }
  componentDidMount(){
      const CancelToken = axios.CancelToken;
      const cancel = CancelToken.source();

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
    // .catch(function (error) {
    //  if (axios.isCancel(error)) {
    //   console.log('Request canceled', error.message);
    // })
}





  render(){
    console.log(this.state)
    if(this.state.title.length === 0){
      return null
    }



    return (

      <div className="title_main">
        <p className="main_title">{this.state.title}</p>
        <p className="main_director">{this.state.director}</p>
        <p className="main_description">{this.state.description}</p>
        <p className="main_raiting">{this.state.rating}</p>
        <NavLink to={`/rate/${this.props.match.params.id}`}>Edit</NavLink>
      </div>

    );
  }
}

export default Rate;
