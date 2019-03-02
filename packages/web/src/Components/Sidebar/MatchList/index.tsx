import * as React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { SidebarPair, SidebarLikesCounter } from '@tinder/components'
import { MeQuery } from '../../../GraphQl/Me'
import { Container } from './style'

interface Props {}

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'

export const MatchList: React.FC<Props> = () => {
    const { data, loading } = useQuery(MeQuery, {})

    if (loading) return <p>lol</p>

    return (
        <Container>
            <SidebarLikesCounter url={url} likes={99} />

            {data.me.matches.map((match: any) => (
                <div key={match.id}>
                    <SidebarPair url={url} name={match.matchedUser.username} />
                </div>
            ))}
        </Container>
    )
}
