import styled, { css } from 'styled-components'

interface ReverseProps {
    reverse: boolean
}

export const Container = styled.div<ReverseProps>`
    padding: 15px;
    display: flex;
    align-items: flex-end;

    ${({ reverse }) =>
        reverse &&
        css`
            justify-content: flex-start;
            flex-flow: row-reverse;
        `}
`
export const Content = styled.div<ReverseProps>`
    max-width: 30%;
    margin: 0 5px 0 5px;
    padding: 10px 12px 10px 12px;
    border-radius: 25px;
    border-bottom-left-radius: 5px;
    background-color: #e7e7e7;
    font-size: 14px;

    ${({ reverse }) =>
        reverse &&
        css`
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 5px;
            background-color: #34abf9;
            color: white;
        `}
`
