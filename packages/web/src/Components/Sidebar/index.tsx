import * as React from 'react'

import { SidebarHeader, SearchInput, SidebarPair, SidebarLikesCounter, SidebarMessage } from '@tinder/components'
import { Container, Text, ContainerPairs, Messages } from './style'

interface Props {}

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'
const message = 'Hey! You look sweet!'

export const Sidebar: React.FC<Props> = () => (
    <Container>
        <SidebarHeader url={url} />

        <SearchInput onChange={() => null} />

        <Text>Pary</Text>

        <ContainerPairs>
            <SidebarLikesCounter url={url} likes={99} />

            {[1, 2, 3, 4, 5, 6].map(() => (
                <SidebarPair url={url} name="Martyna" />
            ))}
        </ContainerPairs>

        <Text>Messages</Text>

        <Messages>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <SidebarMessage url={url} message={message} />
            ))}
        </Messages>
    </Container>
)
