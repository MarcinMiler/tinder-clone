import * as React from 'react'

import { Container, StyledInput, Button, SendIcon, InputWrapper } from './style'

interface Props {
    onChange: (text: string) => void
    onKeyPress: (e: any) => void
    onClick: () => void
    value?: string
}

export const MessagesInput: React.FC<Props> = ({
    onChange,
    onKeyPress,
    value,
    onClick
}) => (
    <Container>
        <InputWrapper>
            <StyledInput
                onChange={e => onChange(e.target.value)}
                onKeyPress={onKeyPress}
                value={value}
                placeholder="Type a message..."
            />
        </InputWrapper>
        <Button onClick={onClick}>
            <SendIcon />
        </Button>
    </Container>
)
