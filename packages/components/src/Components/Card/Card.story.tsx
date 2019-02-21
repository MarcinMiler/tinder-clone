import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from './'

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'

storiesOf('Card', module).add('basic', () => (
    <Card
        url={url}
        name="Martyna"
        age={20}
        job="Ceo Netguru"
        education="Zse-e Radomsko"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam non risus feugiat sodales. Curabitur vehicula venenatis mi, nec maximus tellus placerat ac."
    />
))
