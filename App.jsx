import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './src/pages/Home';
import client from './apollo';
import Login from './src/pages/Login';

// import { observable, computed } from "mobx";

class App extends Component {
  // @observable count = 0;

  // handleInc = () => {
  //   this.count ++ ;
  // }
  // handleDec = () => {
  //   this.count -- ;
  // }

  render() {

  // return <div>
  //   Counter: {this.count}
  //   <button onClick={this.handleInc}> + </button>
  //   <button onClick={this.handleDec}> - </button>
  // </div>


    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>

            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>

          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;