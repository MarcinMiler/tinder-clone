import * as React from 'react'
import { Container, Avatar, Text } from './style'

interface Props {
    url: string
}

export const SidebarHeader: React.FC<Props> = ({ url }) => (
    <Container>
        <Avatar url={url} />
        <Text>My Profile</Text>
    </Container>
)
