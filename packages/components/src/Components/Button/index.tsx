import * as React from 'react'

import { Spinner } from '../Spinner'
import { Container } from './style'

interface Props {
    onClick?: () => void
    loading?: boolean
    spinnerColor?: string
}

export const Button: React.FC<Props> = ({
    children,
    onClick = () => null,
    loading = false,
    spinnerColor
}) => (
    <Container onClick={onClick}>
        {loading ? <Spinner color={spinnerColor} /> : children}
    </Container>
)
