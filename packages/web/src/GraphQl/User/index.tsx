import gql from 'graphql-tag'

export const UserQuery = gql`
    query UserQuery($id: ID!) {
        user(id: $id) {
            id
            username
            age
            job
            education
            description
        }
    }
`
export const UsersQuery = gql`
    query UsersQuery {
        users {
            id
            username
            age
            job
            education
            description
        }
    }
`
