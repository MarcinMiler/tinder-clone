import * as React from 'react'

import { Input, Button } from '@tinder/components'
import { Center, StyledLink } from './style'

interface Props {
    onChange: (e: any) => void
    login: () => void
    loading: boolean
    setLoading: (value: boolean) => void
}

export const LoginForm: React.FC<Props> = ({
    onChange,
    login,
    loading,
    setLoading
}) => (
    <>
        <div>
            {/* Ignore code below ↓↓↓ */}
            <p>
                <p style={{ fontWeight: 600 }}>TEST ACCOUNT!!!</p> email:
                test@test.com password: test
            </p>{' '}
            <p style={{ margin: '8px 0 8px 0' }}>
                (heroku server sleep after 30 minutes so login may take 15/30
                seconds)
            </p>
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
            <Button
                onClick={() => {
                    setLoading(true)
                    login()
                }}
                loading={loading}
            >
                Login
            </Button>
            <Center>
                <StyledLink to="/register">Register</StyledLink>
            </Center>
        </div>
    </>
)
