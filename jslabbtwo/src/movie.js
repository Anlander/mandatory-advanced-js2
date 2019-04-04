import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
class Movie extends Component {

  constructor(){
    super();
    this.state ={
      movies:[]

    }
  }


  componentDidMount(){
    this.getMovies()
  }

  getMovies(){
      axios.get("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies")
      .then(movies => {
        this.setState({movies:movies.data})
      })
  }

  removeMovie(e){
    const id = e.target.value;
    axios.delete(`http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/${id}`)
    .then(() => this.getMovies())
  }


  render(){
    if (this.state.movies.length === 0) {
      return null
    }
    const loop = this.state.movies.map(movie => {
      return (
        <tbody key={movie.id}>
          <tr>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.rating}</td>
            <td><NavLink to={`/rate/${movie.id}`}>Edit</NavLink></td>
            <td><NavLink to={`/details/${movie.id}`}>Details</NavLink></td>
            <td><button value={movie.id} onClick={(e) => this.removeMovie(e)}>Delete</button></td>
          </tr>
        </tbody>
      )
    })
    return (
    <div className="maindiv">
      <table className="table">
        <thead>
          <tr>
            <th className="title-table">Title</th>
            <th className="director-table">Director</th>
            <th className="rating-table">Rating</th>
          </tr>
        </thead>
        {loop}
      </table>
    </div>

    );
  }
}

export default Movie;
