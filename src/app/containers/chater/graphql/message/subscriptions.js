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
const MESSAGE_UPDATE_SUB = gql`
    subscription messageUpdated {
        messageUpdated {
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

export { MESSAGE_ADD_SUB, MESSAGE_UPDATE_SUB };
