import * as React from 'react'
import { useMutation } from 'react-apollo-hooks'
import { withRouter, RouteComponentProps } from 'react-router'

import { LoginMutation } from '../../../GraphQl/Login'
import { useForm } from '../../../Hooks/useForm'
import { LoginForm } from './Form'

export const C: React.FC<RouteComponentProps> = ({ history: { push } }) => {
    const handleEmail = useForm('')
    const handlePassword = useForm('')

    const login = useMutation(LoginMutation, {
        variables: { email: handleEmail.value, password: handlePassword.value },
        update: (proxy, mutationResult) => {
            const token = mutationResult.data.login
            localStorage.setItem('token', token)

            push('app/discover')
        }
    })

    const propsSender = () => ({
        handleEmail,
        handlePassword,
        login
    })

    return <LoginForm {...propsSender()} />
}

export const Form = withRouter(C)
