import gql from 'graphql-tag';
const ALL_USER = gql`
    query getAllUser($filter: UserFilter, $orderBy: UserOrderBy, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
        allUsers(filter: $filter, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
            id
            name
            email
            createdAt
            updatedAt
        }
    }
`;

export default ALL_USER;
