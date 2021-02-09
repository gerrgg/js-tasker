import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { setContext } from "apollo-link-context";

const authLink = setContext((_, { headers }) => {
  // get token from local storage
  const token = localStorage.getItem("js-tasker");

  // add it to request headers for authorization
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const API_URI =
  process.env.NODE_ENV === "development" ? `http://localhost:4000/api` : `/api`;

const httpLink = new HttpLink({
  uri: API_URI,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
