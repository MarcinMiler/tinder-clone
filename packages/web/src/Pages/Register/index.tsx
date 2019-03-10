import * as React from 'react'

import { Background, Wraper } from './style'
import { RegisterForm } from './RegisterForm'

export const RegisterPage = () => (
    <Background>
        <Wraper>
            <RegisterForm />
        </Wraper>
    </Background>
)
