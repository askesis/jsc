import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { concatAST } from 'graphql'

import ALL_USERS_QUERY from '../graphql/queries/users';
import USER_FRAGMENT from '../graphql/fragments/user';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>JSC</h1>
        <Query query={concatAST([ ALL_USERS_QUERY, USER_FRAGMENT ])} >
          { ({ error, loading, data: { allUsers } }) => {

            if (loading) return <p>Loading... </p>

            return allUsers.map( u => <p key={u.id}>{u.id} {u.firstName} {u.lastName}</p>)
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Home;