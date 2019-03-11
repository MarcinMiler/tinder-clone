import * as React from 'react'
import { useQuery, useSubscription } from 'react-apollo-hooks'
import { withRouter, RouteComponentProps } from 'react-router'
import gql from 'graphql-tag'

import {
    MessagesQuery,
    MessagesSubscription,
    MeQuery
} from '../../../../GraphQl'
import { Message } from '@tinder/components'

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/39603362_998758443629799_6345101288283308032_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=b9b43dcdddc56780453d955d601edc9f&oe=5D27D6EC'

export const C: React.FC<RouteComponentProps<{ id: string }>> = ({
    match: { params }
}) => {
    let ref: any

    React.useEffect(() => {
        if (ref) {
            ref.scrollIntoView()
        }
    })

    const { data, loading } = useQuery(MessagesQuery, {
        variables: { matchId: params.id },
        fetchPolicy: 'network-only'
    })
    const me = useQuery(MeQuery, { fetchPolicy: 'cache-only' })
    let userId: number

    if (me.data && me.data.me && me.data.me.id) userId = me.data.me.id

    useSubscription(MessagesSubscription, {
        variables: { matchId: params.id },
        onSubscriptionData: ({ client, subscriptionData }) => {
            if (!subscriptionData.data.createdMessage) return

            const query = gql`
                query MessagesQuery($matchId: ID!) {
                    messages(matchId: $matchId) {
                        id
                        userId
                        text
                    }
                }
            `
            const data: any = client.readQuery({
                query,
                variables: { matchId: params.id }
            })

            client.writeQuery({
                query,
                variables: { matchId: params.id },
                data: {
                    messages: [
                        ...data.messages,
                        subscriptionData.data.createdMessage
                    ]
                }
            })
        }
    })

    if (loading) {
        return <p>loading...</p>
    }

    return (
        <>
            {data.messages.map((msg: any, i: number) => (
                <div key={i}>
                    <Message
                        url={url}
                        message={msg.text}
                        reverse={msg.userId === userId}
                    />
                </div>
            ))}
            <div
                ref={el => {
                    ref = el
                }}
            />
        </>
    )
}

export const MessagesList = withRouter(C)
