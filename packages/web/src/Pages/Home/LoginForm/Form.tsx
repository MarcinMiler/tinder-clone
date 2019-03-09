import * as React from 'react'

import { Input, Button } from '@tinder/components'
import { Center, StyledLink } from './style'

interface Props {
    handleEmail: any
    handlePassword: any
    login: () => void
}

export const LoginForm: React.FC<Props> = ({
    handleEmail,
    handlePassword,
    login
}) => (
    <>
        <div>
            <Input
                {...handleEmail}
                placeholder="mail@some.com"
                label="Email"
                type="text"
            />

            <Input {...handlePassword} label="Password" type="password" />
        </div>

        <div>
            <Button onClick={login}>Login</Button>
            <Center>
                <StyledLink to="/register">Register</StyledLink>
            </Center>
        </div>
    </>
)
