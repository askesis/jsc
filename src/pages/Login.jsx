import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import LOGIN from '../graphql/mutations/login'

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: null,
      password: null
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handleChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const login = this.props.login;

    const variables = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(variables);

    login({ variables })
      .then( response => {
        localStorage.setItem('token', response.data.login.token)
      })
      .catch( error => console.error(error) );
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form>
          <input type="email" name="email" onChange={this.handleChangeEmail} />
          <input type="password" name="password" onChange={this.handleChangePassword} />

          <button type="submit" onClick={this.handleSubmit} >Login</button>

        </form>
        
      </div>
    );
  }
}

const LoginWithGraphql = graphql( LOGIN, { name: 'login' } )(Login);

export default LoginWithGraphql;