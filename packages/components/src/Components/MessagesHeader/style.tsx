import styled from 'styled-components'

import { FiPlusCircle } from 'react-icons/fi'

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f7f7f7;
    background-color: #edf4f5;
`
export const Row = styled.div`
    display: flex;
`
export const Column = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HeadText = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #aab1b5;
`
export const SecondaryText = styled.p`
    margin-top: 3px;
    font-weight: 500;
    font-size: 14px;
    color: #bfc7cc;
`
export const CloseIcon = styled(FiPlusCircle)`
    font-size: 38px;
    color: #f6549e;
    transform: rotate(45deg);
    cursor: pointer;
`
