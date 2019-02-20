import * as React from 'react'

import { Avatar } from '../Avatar'
import { Container, Name } from './style'

interface Props {
    url: string
    name: string
    notificationDot?: boolean
}

export const SidebarPair: React.FC<Props> = ({ url, name, notificationDot }) => (
    <Container>
        <Avatar url={url} size={80} notificationDot={notificationDot} />

        <Name>{name}</Name>
    </Container>
)
