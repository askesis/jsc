import React from "react";
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
    return (
      <div>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/home">Home</Link></div>
      </div>
    )
  }
}

export default withRouter(Navbar);