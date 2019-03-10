import * as React from 'react'

export const useForm = () => {
    const [values, setValues] = React.useState({})

    const onChange = (e: any) =>
        setValues({ ...values, [e.target.name]: e.target.value })

    return {
        onChange,
        values
    }
}
