import gql from 'graphql-tag';
const CREATE_MESSAGE = gql`
    mutation createMessage(
        $user_id: UserInput!
        $room_id: RoomInput!
        $message_body: String
        $message_status: Boolean
        $created_by: UserInput
    ) {
        addMessage(
            user_id: $user_id
            room_id: $room_id
            message_body: $message_body
            message_status: $message_status
            created_by: $created_by
        ) {
            _id
            room {
                _id
            }
            sender {
                _id
            }
            message_body
            message_status
        }
    }
`;

export { CREATE_MESSAGE };
