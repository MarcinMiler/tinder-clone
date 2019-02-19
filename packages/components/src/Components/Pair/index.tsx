import * as React from 'react'

import { Avatar } from '../Avatar'
import { Container, Content, Name, LastMessage, Relative, NotificationDot } from './style'

interface Props {
    url: string
    notificationDot?: boolean
}

export const Pair: React.FC<Props> = ({ url, notificationDot }) => (
    <Container>
        <Relative>
            <Avatar size={80} url={url} />

            {notificationDot && <NotificationDot />}
        </Relative>

        <Content>
            <Name>Kevin</Name>

            <LastMessage>Hey! You look sweet</LastMessage>
        </Content>
    </Container>
)
