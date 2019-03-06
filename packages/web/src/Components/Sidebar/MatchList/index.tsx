import * as React from 'react'
import { useQuery, useSubscription } from 'react-apollo-hooks'
import { withRouter, RouteComponentProps } from 'react-router'

import { SidebarPair } from '@tinder/components'
import { MeQuery, NewMatchSubscription } from '../../../GraphQl'
import { LikesCount } from '../LikesCount'
import { Container } from './style'

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'

export const C: React.FC<RouteComponentProps> = ({ history }) => {
    const { data, loading } = useQuery(MeQuery)
    useSubscription(NewMatchSubscription, {
        variables: { userId: 1 },
        onSubscriptionData: ({ client, subscriptionData }) => {
            if (!subscriptionData.data.newMatch) return

            const data: any = client.readQuery({
                query: MeQuery
            })

            client.writeQuery({
                query: MeQuery,
                data: {
                    me: {
                        ...data.me,
                        matches: [
                            subscriptionData.data.newMatch,
                            ...data.me.matches
                        ]
                    }
                }
            })
        }
    })

    if (loading) return <p>lol</p>

    return (
        <Container>
            <LikesCount />

            {data.me.matches.map((match: any) => (
                <div key={match.matchId}>
                    <SidebarPair
                        url={url}
                        name={match.matchedUser.username}
                        onClick={() =>
                            history.push(
                                `/app/messages/${match.matchId}/${
                                    match.matchedUserId
                                }`
                            )
                        }
                    />
                </div>
            ))}
        </Container>
    )
}

export const MatchList = withRouter(C)
