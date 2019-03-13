import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import { MessagesHeader } from '@tinder/components'
import { MessagesList } from './Components/MessagesList'
import { Profile } from './Components/Profile'
import { Input } from './Components/Input'
import { Container, Wrap } from './style'

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'

export const MessagesPage: React.FC<RouteComponentProps> = ({
    history: { push }
}) => (
    <Container>
        <Wrap>
            <MessagesHeader
                url={url}
                name="Martynka"
                date="22/08/18"
                onClick={() => push('/app/discover')}
            />

            <MessagesList />

            <Input />
        </Wrap>

        <Profile />
    </Container>
)
