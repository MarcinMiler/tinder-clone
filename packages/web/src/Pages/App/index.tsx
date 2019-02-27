import * as React from 'react'

import { Sidebar } from '../../Components/Sidebar'
import { Deck } from '../../Components/Deck'
import { Container, Background } from './style'

export const App = () => (
    <Container>
        <Sidebar />
        <Background>
            <Deck />
        </Background>
    </Container>
)
