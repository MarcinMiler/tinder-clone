import * as React from 'react'
import { useMutation } from 'react-apollo-hooks'
import { withRouter, RouteComponentProps } from 'react-router'

import { RegisterMutation } from '../../../GraphQl/Register'
import { useForm } from '../../../Hooks/useForm'
import { Form } from './Form'

export const C: React.FC<RouteComponentProps> = ({ history: { push } }) => {
    const { onChange, values } = useForm() as any
    const register = useMutation(RegisterMutation, {
        variables: { ...values, age: parseInt(values.age, 10) },
        update: (proxy, { data }) => {
            if (data.register) push('/')
        }
    })

    return <Form onChange={onChange} register={register} />
}

export const RegisterForm = withRouter(C)
