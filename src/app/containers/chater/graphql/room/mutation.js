import gql from 'graphql-tag';
const UPDATE_ROOM = gql`
    mutation updateRoom(
        $id: String!
        $users: [UserInput]
        $name: String!
        $description: String
        $topic: String
        $image_url: String
        $updated_by: UserInput
        $is_private: Boolean
    ) {
        updateRoom(
            _id: $id
            users: $users
            name: $name
            description: $description
            topic: $topic
            image_url: $image_url
            updated_by: $updated_by
            is_private: $is_private
        ) {
            _id
            users {
                _id
                username
            }
            name
        }
    }
`;

export { UPDATE_ROOM };
