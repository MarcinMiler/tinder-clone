import * as React from 'react'

import { Input, Button } from '@tinder/components'
import { Background, Wraper, Logo, StyledLink, Center } from './style'

export const Home = () => (
    <Background>
        <Wraper>
            <Logo />
            <div>
                <Input
                    onChange={() => null}
                    value=""
                    placeholder="mail@some.com"
                    label="Email"
                    type="text"
                />

                <Input
                    onChange={() => null}
                    value=""
                    label="Password"
                    type="password"
                />
            </div>

            <div>
                <Button>Login</Button>
                <Center>
                    <StyledLink to="/register">Register</StyledLink>
                </Center>
            </div>
        </Wraper>
    </Background>
)
