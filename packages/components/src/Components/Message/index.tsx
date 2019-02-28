import * as React from 'react'

import { Avatar } from '../Avatar'
import { Container, Content } from './style'

interface Props {
    url: string
    message: string
    reverse?: boolean
}

export const Message: React.FC<Props> = ({ url, message, reverse = false }) => (
    <Container reverse={reverse}>
        <Avatar size={50} url={url} />

        <Content reverse={reverse}>{message}</Content>
    </Container>
)
