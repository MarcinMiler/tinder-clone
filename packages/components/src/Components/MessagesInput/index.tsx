import * as React from 'react'

import { Container, StyledInput, Button, SendIcon, InputWrapper } from './style'

interface Props {
    onChange: (text: string) => void
    onClick: () => void
}

export const MessagesInput: React.FC<Props> = ({ onChange, onClick }) => (
    <Container>
        <InputWrapper>
            <StyledInput
                onChange={e => onChange(e.target.value)}
                placeholder="Type a message..."
            />
        </InputWrapper>
        <Button onClick={onClick}>
            <SendIcon />
        </Button>
    </Container>
)
