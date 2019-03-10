import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Input } from './'

storiesOf('Input', module).add('basic', () => (
    <Input
        placeholder=""
        onChange={() => null}
        value="m@m.com"
        label="Email"
        type="text"
        name="Email"
    />
))
