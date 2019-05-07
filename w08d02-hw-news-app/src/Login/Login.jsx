import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // call handle function from App.js
    };
    render(){
        return(
            <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <div className="center-text">  
                    <h1>Login</h1>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="login-form">username <input onChange={ this.handleChange } type="text" name="username" /></div>
                        <div className="login-form">password <input onChange={ this.handleChange } type="text" name="password" /></div>
                        <div className="login-form"><input type="submit" /></div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Login;