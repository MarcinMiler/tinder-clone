import * as React from 'react'

import { StyledInput, Label } from './style'

interface Props {
    onChange: (e: any) => void
    value?: string | number
    label: string
    type: string
    name: string
    placeholder?: string
}

export const Input: React.FC<Props> = ({
    placeholder,
    value,
    onChange,
    label,
    name,
    type
}) => (
    <>
        <Label>{label}</Label>
        <StyledInput
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            type={type}
        />
    </>
)
