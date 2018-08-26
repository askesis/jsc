import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { concatAST } from 'graphql'

import ME from '../graphql/queries/me';
import USERS from '../graphql/queries/users'
import USER_FRAGMENT from '../graphql/fragments/user';

import UsersList from '../components/UsersList';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>JSC</h1>

        <Query query={concatAST([USERS, USER_FRAGMENT])} >
          { ({ error, loading, data, refetch }) => {
            if (error) console.log(error);
            if (loading) return <p>Loading... </p>
            console.log(data);
            return <UsersList users={allUsers} refetch={refetch} />
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Home;