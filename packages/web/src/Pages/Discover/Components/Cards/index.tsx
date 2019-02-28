import * as React from 'react'
import { animated, useSprings, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'

import { Card } from '@tinder/components'
import { Container, Item, C } from './style'

interface Props {}
const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/39603362_998758443629799_6345101288283308032_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=b9b43dcdddc56780453d955d601edc9f&oe=5D27D6EC'

const to = () => ({
    x: 0,
    y: 0,
    rot: 0,
    scale: 1,
    delay: 300
})
const from = () => ({ x: 0, y: 0, rot: 0, scale: 1 })
const trans = (r: any, s: any) =>
    `rotateX(0deg) rotateY(0deg) rotateZ(${r}deg) scale(${s})`

export const Cards: React.FC<Props> = () => {
    //@ts-ignore
    const [props, set] = useSprings(5, (i: any) => ({
        to: to(),
        from: from()
    }))

    const like = () => console.log('like')
    const dislike = () => console.log('dislike')

    const bind = useGesture(
        ({
            args: [index],
            down,
            delta: [xDelta],
            direction: [xDir],
            velocity
        }) => {
            let isGone = false
            const trigger = velocity > 0.2
            const dir = xDir < 0 ? -1 : 1

            if (!down && trigger) {
                isGone = true

                dir === 1 ? like() : dislike()
            }

            set((i: number) => {
                if (index !== i) return

                const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
                const x = isGone
                    ? (200 + window.innerWidth) * dir
                    : down
                    ? xDelta
                    : 0
                const scale = down ? 1.1 : 1

                return {
                    x,
                    scale,
                    rot: down ? rot : 0,
                    delay: undefined,
                    config: {
                        friction: 50,
                        tension: down ? 800 : isGone ? 200 : 500
                    }
                }
            })
        }
    )
    return (
        <Container as={animated.div}>
            {props.map(({ x, y, rot, scale }: any, i: any) => (
                <C
                    as={animated.div}
                    key={i}
                    style={{
                        transform: interpolate(
                            [x, y],
                            (x, y) => `translate3d(${x}px,${y}px,0)`
                        )
                    }}
                >
                    <Item
                        {...bind(i)}
                        as={animated.div}
                        style={{
                            transform: interpolate([rot, scale], trans)
                        }}
                    >
                        <Card
                            url={url}
                            name="Marcinek"
                            age={20}
                            job="Ceo Netguru"
                            education="Zse-e Radomsko"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam non risus feugiat sodales. Curabitur vehicula venenatis mi, nec maximus tellus placerat ac."
                        />
                    </Item>
                </C>
            ))}
        </Container>
    )
}
