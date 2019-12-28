import gql from 'graphql-tag';
const CREATE_USER_ROOM = gql`
    mutation addUserRoom($user: IdInput!, $room: IdInput!, $type: RoleUserRoomTypes, $status: Boolean, $created_by: IdInput) {
        addUserRoom(user: $user, room: $room, type: $type, status: $status, created_by: $created_by) {
            _id
            user {
                _id
                username
            }
            room {
                _id
                name
            }
            status
            type
        }
    }
`;

export { CREATE_USER_ROOM };
