import * as React from 'react'

export const useForm = (initialValue: any) => {
    const [value, setValue] = React.useState(initialValue)

    return {
        onChange: (text: string) => setValue(text),
        value
    }
}
