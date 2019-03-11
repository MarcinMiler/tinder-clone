import * as React from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import { withRouter, RouteComponentProps } from 'react-router'

import { CreateMessageMutation, MeQuery } from '../../../../GraphQl'
import { MessagesInput } from '@tinder/components'

interface Props extends RouteComponentProps<{ id: string }> {}

export const C: React.FC<Props> = React.memo(({ match: { params } }) => {
    const [text, setText] = React.useState('')

    const { data } = useQuery(MeQuery, { fetchPolicy: 'cache-only' })
    const sendMessage = useMutation(CreateMessageMutation, {
        variables: {
            matchId: parseInt(params.id, 10),
            userId: data && data.me && data.me.id,
            text
        }
    })

    const sendAndClearInput = () => {
        sendMessage()
        setText('')
    }

    const onKeyPress = (e: any) => {
        if (e.key !== 'Enter') return

        sendAndClearInput()
    }

    return (
        <MessagesInput
            value={text}
            onChange={setText}
            onClick={sendAndClearInput}
            onKeyPress={onKeyPress}
        />
    )
})

export const Input = withRouter(C)
