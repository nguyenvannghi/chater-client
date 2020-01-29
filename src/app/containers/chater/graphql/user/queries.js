import gql from 'graphql-tag';
const GET_USERS = gql`
    query getUsers($where: JSON) {
        users(where: $where) {
            _id
            username
            email
        }
    }
`;

export { GET_USERS };
