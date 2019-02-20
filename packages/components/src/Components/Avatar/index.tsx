import * as React from 'react'

import { Container, NotificationDot } from './style'

interface Props {
    notificationDot?: boolean
    size: number
    url: string
}

export const Avatar: React.FC<Props> = ({ size, url, notificationDot }) => (
    <Container url={url} size={size}>
        {notificationDot && <NotificationDot parentSize={size} />}
    </Container>
)
