import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout"
import Browser from "./pages/Browser"

// import Hero from "./components/Hero"
// import Footer from "./components/Footer"
// import Nav from "./components/Nav"
// import Card from "./components/Card"

import "./App"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
 <Router>
      <Layout>
         <Routes>
           <Route
             path="/"
             element={<Browser />}
           />
           <Route
             path="/me"
             element={<Browser />}
           />
         </Routes>
      </Layout >
     </Router>
     </ApolloProvider>
  )
}