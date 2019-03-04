import * as React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { UsersQuery } from '../../../../GraphQl/User'
import { LikeMutation } from '../../../../GraphQl/Like'
import { Cards } from '.'

interface Props {}

export const CardsContainer: React.FC<Props> = () => {
    const { data, loading } = useQuery(UsersQuery)
    const like = useMutation(LikeMutation)

    const dislike = (id: number) => console.log('dislike', id)

    if (loading) return <p>loading</p>

    return <Cards users={data.users} like={like} dislike={dislike} />
}
