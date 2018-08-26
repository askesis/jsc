import React from 'react';

import Navbar from './Navbar';

class Main extends React.Component {  
  render() {
    return (
      <div id="main-layout">

        <Navbar />
        
        <div id="content">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default Main;