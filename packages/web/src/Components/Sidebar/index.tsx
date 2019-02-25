import * as React from 'react'
import { AutoSizer, List } from 'react-virtualized'

import { SidebarHeader, SearchInput, SidebarMessage } from '@tinder/components'
import { MatchList } from './MatchList'
import { Container, Text, ContainerPairs, Messages } from './style'

interface Props {}

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'
const message = 'Hey! You look sweet!'

export const Sidebar: React.FC<Props> = () => {
    const messagesList = ({ key, style }: any) => (
        <div key={key} style={style}>
            <SidebarMessage url={url} message={message} />
        </div>
    )

    return (
        <Container>
            <SidebarHeader url={url} />

            <SearchInput onChange={() => null} />

            <Text>Pary</Text>

            <MatchList />

            <Text>Messages</Text>

            <Messages>
                <AutoSizer disableWidth>
                    {({ height }) => (
                        <List
                            style={{ outline: 'none' }}
                            height={height}
                            rowCount={20}
                            rowHeight={100}
                            rowRenderer={messagesList}
                            width={380}
                        />
                    )}
                </AutoSizer>
            </Messages>
        </Container>
    )
}
