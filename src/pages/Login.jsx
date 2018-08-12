import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }
  }
  

  handleChange(e){
    console.log( e.target.name, e.target.value);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form>
          <input type="email" name="email" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />

        </form>
        
      </div>
    );
  }
}

export default Login;