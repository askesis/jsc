import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { concatAST } from 'graphql'

import ALL_USERS_QUERY from '../graphql/queries/users';
import USER_FRAGMENT from '../graphql/fragments/user';
import UsersList from '../components/UsersList';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>JSC</h1>

        <Query query={concatAST([ ALL_USERS_QUERY, USER_FRAGMENT ])} >
          { ({ error, loading, data: { allUsers }, refetch }) => {

            if (loading) return <p>Loading... </p>

            return <UsersList users={allUsers} refetch={refetch} />
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Home;