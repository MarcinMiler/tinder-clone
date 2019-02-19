import * as React from 'react'

interface Props {
    name: string
}

export const Button: React.FC<Props> = ({ name }) => {
    const [c, setC] = React.useState(0)
    return (
        <button onClick={() => setC(c + 1)}>
            fancy button {name} {c}{' '}
        </button>
    )
}
