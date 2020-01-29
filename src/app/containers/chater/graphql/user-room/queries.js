import gql from 'graphql-tag';

const GET_USER_ROOMS = gql`
    query userRooms($where: JSON) {
        userRooms(where: $where) {
            _id
            user {
                _id
                username
            }
            room {
                _id
                name
                topic
                image_url
                description
            }
            type
            status
        }
    }
`;

export { GET_USER_ROOMS };
