import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');
    
    body {
        width: 100%;
        height: 100vh;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    div {
        box-sizing: border-box;
    }

    p {
        margin: 0;
    }

    input, textarea {
        border: none;
        font-family: 'Montserrat', sans-serif;

        &:focus {
            outline: none;
        }
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #efefef;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #ff506b; 
        border-radius: 25px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #ff1d40; 
    }
`

interface Theme {
    name: string
    colors: {
        [key: string]: string
    }
}

export const theme: Theme = {
    name: 'Deafult',
    colors: {
        darkblue: '#21346A',
        lightgray: '#F1F1F6',
        darkgray: '#C9C9C9'
    }
}
