import * as React from 'react'
import { useQuery, useSubscription } from 'react-apollo-hooks'

import {
    MessagesQuery,
    MessagesSubscription
} from '../../../../GraphQl/Messages'
import { Message } from '@tinder/components'
import gql from 'graphql-tag'

interface Props {}

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/39603362_998758443629799_6345101288283308032_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=b9b43dcdddc56780453d955d601edc9f&oe=5D27D6EC'

const query = gql`
    query MessagesQuery {
        messages(matchId: 1) {
            id
            userId
            text
        }
    }
`

export const MessagesList: React.FC<Props> = () => {
    const { data, loading } = useQuery(MessagesQuery, {
        variables: { matchId: 1 }
    })
    useSubscription(MessagesSubscription, {
        variables: { matchId: 1 },
        onSubscriptionData: ({ client, subscriptionData }) => {
            const data: any = client.readQuery({
                query
            })

            client.writeQuery({
                query,
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
                <div key={msg.id}>
                    <Message
                        url={url}
                        message={msg.text}
                        reverse={i % 2 == 0}
                    />
                </div>
            ))}
        </>
    )
}
