import * as React from 'react'

import { StyledInput, Label } from './style'

interface Props {
    onChange: (text: string) => void
    value?: string | number
    label: string
    type: string
    placeholder?: string
}

export const Input: React.FC<Props> = ({
    placeholder,
    value,
    onChange,
    label,
    type
}) => (
    <>
        <Label>{label}</Label>
        <StyledInput
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
            type={type}
        />
    </>
)
