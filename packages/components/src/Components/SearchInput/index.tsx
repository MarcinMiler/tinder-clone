import * as React from 'react'

import { Container, Input } from './style'

interface Props {
    onChange: (text: string) => void
}

export const SearchInput: React.FC<Props> = ({ onChange }) => (
    <Container>
        <Input onChange={e => onChange(e.target.value)} placeholder="Szukaj wsrod 100 par" />
    </Container>
)
