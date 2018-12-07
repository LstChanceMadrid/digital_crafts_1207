
import React, { Component } from 'react';
import '../styles/index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Route, Switch } from 'react-router-dom'
import Login from './main/Login'
import Home from './main/Home'
import Register from './main/Register'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Main>
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/login' component = {Login} />
            <Route path = '/register' component = {Register} />
          </Switch>
        </Main>
        
        <Footer />
      </div>
    );
  }
}

export default App;
