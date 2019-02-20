import * as React from 'react'

import { Avatar } from '../Avatar'
import { Container, Content, Name, LastMessage } from './style'

interface Props {
    url: string
    notificationDot?: boolean
    message: string
}

export const Pair: React.FC<Props> = ({ url, notificationDot, message }) => (
    <Container>
        <Avatar size={80} url={url} notificationDot={notificationDot} />

        <Content>
            <Name>Kevin</Name>

            <LastMessage>{message}</LastMessage>
        </Content>
    </Container>
)
