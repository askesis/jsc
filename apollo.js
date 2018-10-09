import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  // uri: 'https://fakerql.com/graphql'
  uri: 'http://localhost:4000'
});

// const authLink = setContext((_, some ) => {
  // console.log(_);
  // console.log(some);
  // const token = localStorage.getItem('token');
  
  // return  { 
  //   headers: { 
  //     Authorization: token ? `Bearer ${token}` : ""  
  //   } 
  // }
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

client.initStore = () => {};

export default client;
