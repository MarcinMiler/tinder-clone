import { configure, addDecorator } from '@storybook/react'

import * as React from 'react'
import { GlobalStyle } from '../src/Theme'

const req = require.context('../src', true, /.story.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

const withGlobal = cb => (
    <>
        <GlobalStyle />
        {cb()}
    </>
)

addDecorator(withGlobal)

configure(loadStories, module)
