import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { MessagesInput } from './'

storiesOf('MessagesInput', module).add('basic', () => (
    <MessagesInput onChange={() => null} onClick={() => null} />
))
