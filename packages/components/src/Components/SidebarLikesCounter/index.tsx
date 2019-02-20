import * as React from 'react'

import { Container, Text, BluredImg, LikesCount, Relative, GoldBorder } from './style'

interface Props {
    url: string
    likes: number
}

export const SidebarLikesCounter: React.FC<Props> = ({ url, likes }) => (
    <Container>
        <Relative>
            <GoldBorder>
                <BluredImg url={url} />
            </GoldBorder>

            <LikesCount>{likes}+</LikesCount>
        </Relative>

        <Text>Polubienia</Text>
    </Container>
)
