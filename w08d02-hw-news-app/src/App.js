import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import ArticleContainer from './ArticleContainer/ArticleContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: null,
      password: null,
      loggedIn: false
    } 
  }
  handleLogin = (formData) =>  {
    this.setState({
      username: formData.username,
      password: formData.password,
      loggedIn: true
    })
  };
  render(){
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="center-text">  
        <h1>News App</h1>
        <hr />
        {
        this.state.loggedIn === true ?
        <ArticleContainer />
          :
          <Login handleLogin={ this.handleLogin } />
        }
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
