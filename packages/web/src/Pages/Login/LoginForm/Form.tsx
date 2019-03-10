import * as React from 'react'

import { Input, Button } from '@tinder/components'
import { Center, StyledLink } from './style'

interface Props {
    onChange: (e: any) => void
    login: () => void
}

export const LoginForm: React.FC<Props> = ({ onChange, login }) => (
    <>
        <div>
            TEST ACCOUNT!!! email: test@test.com password: test
            <Input
                onChange={onChange}
                name="email"
                label="Email"
                placeholder="test@test.com (test account)"
                type="text"
            />
            <Input
                onChange={onChange}
                name="password"
                label="Password"
                placeholder="test"
                type="password"
            />
        </div>

        <div>
            <Button onClick={login}>Login</Button>
            <Center>
                <StyledLink to="/register">Register</StyledLink>
            </Center>
        </div>
    </>
)
