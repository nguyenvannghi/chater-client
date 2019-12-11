import gql from 'graphql-tag';
const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;
const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $email: String!, $name: String!) {
        updateUser(id: $id, email: $email, name: $name) {
            createdAt
            id
        }
    }
`;

const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            createdAt
            id
        }
    }
`;

export { LOGIN, UPDATE_USER, DELETE_USER };
