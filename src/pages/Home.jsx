import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { concatAST } from 'graphql'

import BOOKS_QUERY from '../graphql/books';
import ME from '../graphql/queries/me';
import USERS from '../graphql/queries/users'
import USER_FRAGMENT from '../graphql/fragments/user';

import UsersList from '../components/UsersList';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>JSC</h1>

      <Query query={BOOKS_QUERY}>
        {({ error, loading, data }) => {
          if ( error ) {console.error(error);return;}

          if ( loading ) return <p>Loading...</p>
          
          return data.books.map( book => <div key={book.id}>{book.title} {book.author.firstName} {book.author.firstName}</div>)
        }}
      </Query>
        {/*<Query query={concatAST([USERS, USER_FRAGMENT])} >
          { ({ error, loading, data, refetch }) => {
            if (error) console.log(error);
            if (loading) return <p>Loading... </p>
            console.log(data);
            return <UsersList users={data.allUsers} refetch={refetch} />
          }}
        </Query>*/}
      </React.Fragment>
    );
  }
}

export default Home;