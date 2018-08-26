import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { concatAST } from 'graphql'

import ME from '../graphql/queries/me';

import UsersList from '../components/UsersList';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>JSC</h1>

        <Query query={ME} >
          { ({ error, loading, data, refetch }) => {
            if (error) console.log(error);
            if (loading) return <p>Loading... </p>
            console.log(data);
            return <div></div>
            // return <UsersList users={allUsers} refetch={refetch} />
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Home;