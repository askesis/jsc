import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './src/pages/Home';
import client from './apollo';
import Login from './src/pages/Login';
import Main from './src/layouts/Main';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Main>
            <Switch>

              <Route path="/home" component={Home}/>
              <Route path="/login" component={Login}/>

            </Switch>
          </Main>
          </Router>
          
      </ApolloProvider>
    );
  }
}

export default App;
