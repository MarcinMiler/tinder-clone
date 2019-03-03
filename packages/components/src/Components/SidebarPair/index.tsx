import * as React from 'react'

import { Avatar } from '../Avatar'
import { Container, Name } from './style'

interface Props {
    url: string
    name: string
    notificationDot?: boolean
    onClick?: () => void
}

export const SidebarPair: React.FC<Props> = ({
    url,
    name,
    notificationDot,
    onClick = () => null
}) => (
    <Container onClick={onClick}>
        <Avatar url={url} size={80} notificationDot={notificationDot} />

        <Name>{name}</Name>
    </Container>
)
