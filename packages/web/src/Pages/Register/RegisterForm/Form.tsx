import * as React from 'react'

import { Input, Button } from '@tinder/components'

interface Props {
    register: () => void
    onChange: (e: any) => void
}

export const Form: React.FC<Props> = ({ onChange, register }) => (
    <>
        <Input name="email" type="text" label="Email" onChange={onChange} />
        <Input
            name="password"
            type="text"
            label="Password"
            onChange={onChange}
        />
        <Input
            name="username"
            type="text"
            label="Username"
            onChange={onChange}
        />
        <Input name="age" type="number" label="Age" onChange={onChange} />
        <Input
            name="job"
            type="text"
            label="Job"
            placeholder="Optional"
            onChange={onChange}
        />
        <Input
            name="education"
            type="text"
            label="Education"
            placeholder="Optional"
            onChange={onChange}
        />
        <Input
            name="description"
            type="text"
            label="Description"
            placeholder="Optional"
            onChange={onChange}
        />

        <Button onClick={register}>Register</Button>
    </>
)
