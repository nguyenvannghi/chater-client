import gql from 'graphql-tag';

const GET_MESSAGES = gql`
    query getMessages($where: JSON) {
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

export { GET_MESSAGES };
