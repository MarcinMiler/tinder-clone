import * as React from 'react'
import { useMutation } from 'react-apollo-hooks'
import { withRouter, RouteComponentProps } from 'react-router'

import { LoginMutation } from '../../../GraphQl/Login'
import { useForm } from '../../../Hooks/useForm'
import { LoginForm } from './Form'

export const C: React.FC<RouteComponentProps> = ({ history: { push } }) => {
    const { onChange, values } = useForm() as any

    const login = useMutation(LoginMutation, {
        variables: { email: values.email, password: values.password },
        update: (proxy, { data }) => {
            const token = data.login
            if (!token) return

            localStorage.setItem('token', token)
            push('app/discover')
        }
    })

    return <LoginForm login={login} onChange={onChange} />
}

export const Form = withRouter(C)
