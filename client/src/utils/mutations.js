import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $decription: String!, $bookId: ID!, $image: String!, $link: String!, $title: String!) {
    saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// to remove book do I only need the ID?
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeSkill(bookId: $bookId) {
      _id
      name
      skills
    }
  }
`;
