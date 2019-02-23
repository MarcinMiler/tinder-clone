import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { FaHeart } from 'react-icons/fa'

import { CircularButton } from './'

storiesOf('CircularButton', module).add('with icon', () => (
    <CircularButton size={60}>
        <FaHeart color="#00f9bc" />
    </CircularButton>
))
