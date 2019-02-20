import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { SearchInput } from './'

storiesOf('SearchInput', module).add('basic', () => (
    <div style={{ width: '400px' }}>
        <SearchInput onChange={() => null} />
    </div>
))
