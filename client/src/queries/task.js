import { gql } from "@apollo/client";

export const ADD_TASK = gql`
  mutation addTask($content: String!) {
    addTask(content: $content) {
      id
      content
      created
      due
      priority
      complete
      late
      user {
        username
      }
    }
  }
`;
