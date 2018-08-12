import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
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

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Login</h1>

        <form>
          <input type="email" name="email" onChange={this.handleChangeEmail} />
          <input type="password" name="password" onChange={this.handleChangePassword} />

        </form>
        
      </div>
    );
  }
}

export default Login;