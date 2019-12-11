import gql from 'graphql-tag';

const MESSAGE_ADD_SUB = gql`
    subscription messageAdded {
        messageAdded {
            _id
            room {
                _id
                name
            }
            sender {
                _id
                username
            }
            message_body
            message_status
        }
    }
`;

export { MESSAGE_ADD_SUB };
