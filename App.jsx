import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './src/pages/Home';
import client from './apollo';
import Login from './src/pages/Login';

class App extends Component {
  render() {
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