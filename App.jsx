import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import Home from './src/pages/Home';
import client from './apollo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;