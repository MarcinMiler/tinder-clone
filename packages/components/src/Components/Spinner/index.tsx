import * as React from 'react'

import { Container } from './style'

interface Props {
    color?: string
}

export const Spinner: React.FC<Props> = ({ color }) => (
    <Container color={color} />
)
