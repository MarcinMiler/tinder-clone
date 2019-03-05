import * as React from 'react'
import { useSubscription, useQuery } from 'react-apollo-hooks'

import { LikesSubscription, LikesQuery } from '../../../GraphQl'
import { SidebarLikesCounter } from '@tinder/components'

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'

export const LikesCount = () => {
    const { data, loading } = useQuery(LikesQuery)

    useSubscription(LikesSubscription, {
        variables: { userId: 2 },
        onSubscriptionData: ({ client, subscriptionData }) => {
            if (!subscriptionData.data.newLike) return

            const data: any = client.readQuery({
                query: LikesQuery
            })

            client.writeQuery({
                query: LikesQuery,
                data: {
                    likes: data.likes + 1
                }
            })
        }
    })

    if (loading) return <p>loading</p>

    return <SidebarLikesCounter url={url} likes={data.likes} />
}
