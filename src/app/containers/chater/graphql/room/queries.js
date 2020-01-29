import gql from 'graphql-tag';
const GET_ROOMS = gql`
    query getRooms($where: JSON) {
        rooms(where: $where) {
            _id
            users {
                _id
                username
            }
            name
            description
            image_url
            topic
        }
    }
`;

export { GET_ROOMS };
