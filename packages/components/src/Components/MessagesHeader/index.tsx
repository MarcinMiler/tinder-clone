import * as React from 'react'

import { Avatar } from '../Avatar'
import {
    Container,
    Column,
    HeadText,
    SecondaryText,
    CloseIcon,
    Row
} from './style'

interface Props {
    url: string
    name: string
    date: string
    onClick?: () => void
}

export const MessagesHeader: React.FC<Props> = ({
    url,
    name,
    date,
    onClick = () => null
}) => (
    <Container>
        <Row>
            <Avatar size={50} url={url} />

            <Column>
                <HeadText>CONVERSATION WITH {name.toUpperCase()}</HeadText>

                <SecondaryText>
                    {name} liked you on {date}
                </SecondaryText>
            </Column>
        </Row>

        <CloseIcon onClick={onClick} />
    </Container>
)
