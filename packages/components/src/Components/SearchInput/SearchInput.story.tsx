import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { SearchInput } from './'

storiesOf('SearchInput', module).add('basic', () => (
    <div style={{ width: '400px', border: '1px solid gray' }}>
        <SearchInput onChange={() => null} />
    </div>
))
