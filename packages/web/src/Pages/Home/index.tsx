import * as React from 'react'

import { Form } from './LoginForm'
import { Background, Wraper, Logo } from './style'

export const Home = () => (
    <Background>
        <Wraper>
            <Logo />
            <Form />
        </Wraper>
    </Background>
)
