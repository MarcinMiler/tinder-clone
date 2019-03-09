import gql from 'graphql-tag'

export const LoginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(input: { email: $email, password: $password })
    }
`
