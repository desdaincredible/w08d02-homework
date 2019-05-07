import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import ArticleContainer from './ArticleContainer/ArticleContainer';
import Article from './ArticleContainer/Article/Article';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: null,
      loggedIn: false
    }
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="center-text">  
        <h1>News App</h1>
        <Login />
        <ArticleContainer />
        <Article />
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
