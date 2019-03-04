import * as React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'

import { UsersQuery, LikeMutation, DislikeMutation } from '../../../../GraphQl'
import { Cards } from './'

interface Props {}

export const CardsContainer: React.FC<Props> = () => {
    const { data, loading } = useQuery(UsersQuery)

    const like = useMutation(LikeMutation)
    const dislike = useMutation(DislikeMutation)

    if (loading) return <p>loading</p>

    return <Cards users={data.users} like={like} dislike={dislike} />
}
