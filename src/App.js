import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Body from './Components/Body';
import Header from './Components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: window.localStorage.getItem("username")
    }
  }

  logOut() {
    window.localStorage.removeItem('username');

    this.setState({
      username: undefined
    });
  }

  logIn(username) {
      console.log('asdf')
      window.localStorage.setItem('username', username);

      this.setState({
        username: username
      });
  }

  render() {    
    return (
      <BrowserRouter>
        <div>
          <Header onLogOut={this.logOut.bind(this)}/>
          <Body username={this.state.username} onLogIn={this.logIn.bind(this)}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
