import * as React from 'react'

import { Form } from './LoginForm'
import { Background, Wraper, Logo } from './style'

export const LoginPage = () => (
    <Background>
        <Wraper>
            <Logo />
            <Form />
        </Wraper>
    </Background>
)
