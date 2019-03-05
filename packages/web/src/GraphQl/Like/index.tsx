import gql from 'graphql-tag'

export const LikeMutation = gql`
    mutation LikeMutation($userId: ID!, $toUserId: ID!) {
        like(input: { userId: $userId, toUserId: $toUserId })
    }
`
export const LikesQuery = gql`
    query LikesQuery {
        likes
    }
`
export const LikesSubscription = gql`
    subscription newLike($userId: ID!) {
        newLike(userId: $userId)
    }
`
