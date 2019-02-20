import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { SidebarHeader } from './'

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558'

storiesOf('Sidebar header', module).add('basic', () => <SidebarHeader url={url} />)
