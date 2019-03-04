import gql from 'graphql-tag'

export const LikeMutation = gql`
    mutation LikeMutation($userId: ID!, $toUserId: ID!) {
        like(input: { userId: $userId, toUserId: $toUserId })
    }
`
