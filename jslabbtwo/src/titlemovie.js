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
