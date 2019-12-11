import gql from 'graphql-tag';
const GET_ROOMS = gql`
    query getRooms($where: Where) {
        rooms(where: $where) {
            _id
            users {
                _id
                username
            }
            name
            description
            topic
        }
    }
`;

export { GET_ROOMS };
