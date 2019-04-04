import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div >
      <p> <NavLink to="/" className="div-main">HOME</NavLink> </p>
      <p> <NavLink to="/newmovie" className="div-addmovie">ADD MOVIE</NavLink></p>
      </div>
    );

  }
}

export default Nav;
