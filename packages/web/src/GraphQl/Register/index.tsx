import gql from 'graphql-tag'

export const RegisterMutation = gql`
    mutation RegisterMutation(
        $email: String!
        $password: String!
        $username: String!
        $age: Int!
        $job: String
        $education: String
        $description: String
    ) {
        register(
            input: {
                email: $email
                password: $password
                username: $username
                age: $age
                job: $job
                education: $education
                description: $description
            }
        )
    }
`
