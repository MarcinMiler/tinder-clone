import * as React from 'react'

import { Container } from './style'

interface Props {
    onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, onClick = () => null }) => (
    <Container onClick={onClick}>{children}</Container>
)
