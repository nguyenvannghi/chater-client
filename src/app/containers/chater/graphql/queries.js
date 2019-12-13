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
            image_url
            topic
        }
    }
`;
const GET_MESSAGES = gql`
    query getMessages($where: Where) {
        messages(where: $where) {
            _id
            room {
                _id
                description
                topic
            }
            sender {
                _id
                username
            }
            message_body
            message_body
            created_by {
                _id
                username
            }
            createdAt
            updatedAt
        }
    }
`;

export { GET_ROOMS, GET_MESSAGES };
