import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      username
      passwordHash
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`;
