import gql from 'graphql-tag'

export const MeQuery = gql`
    query MeQuery {
        me {
            id
            username
            age
            matches {
                id
                match {
                    date
                }
                matchedUserId
                matchedUser {
                    id
                    username
                    age
                }
            }
        }
    }
`
