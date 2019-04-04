import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './nav';
import Movie from './movie';
import Newmovie from './newmovie';
import Rate from './rate';
import Title from './titlemovie';

class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Movie} />
            <Route path="/Newmovie" component={Newmovie} />
            <Route path="/details/:id" component={Title} />
            <Route path="/rate/:id" component={Rate} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
