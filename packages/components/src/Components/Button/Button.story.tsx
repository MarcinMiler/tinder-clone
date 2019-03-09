import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { Button } from './'

storiesOf('Button', module)
    .add('basic', () => <Button>Action</Button>)
    .add('with Spinner', () => <Button loading>Action</Button>)
