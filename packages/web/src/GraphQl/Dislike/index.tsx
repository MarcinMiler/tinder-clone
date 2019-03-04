import gql from 'graphql-tag'

export const DislikeMutation = gql`
    mutation DislikeMutation($toUserId: ID!) {
        dislike(toUserID: $toUserId)
    }
`
