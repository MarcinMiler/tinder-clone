import styled from 'styled-components'

import { FiSend } from 'react-icons/fi'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    border-top: 1px solid lightgray;
    background-color: #ecf4f4;
`
export const InputWrapper = styled.div`
    flex: 1;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledInput = styled.input`
    width: 100%;
    background-color: #ecf4f4;
    font-size: 14px;
`
export const Button = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        90deg,
        rgba(255, 52, 126, 1) 0%,
        rgba(255, 116, 97, 1) 100%
    );
    color: white;
    cursor: pointer;
`
export const SendIcon = styled(FiSend)`
    font-size: 32px;
`
