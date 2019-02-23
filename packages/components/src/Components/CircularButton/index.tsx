import styled from 'styled-components'

interface Props {
    size: number
}

export const CircularButton = styled.div<Props>`
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: ${({ size }) => size / 2 + 'px'};
    box-shadow: 0px 0px 10px #f2f2f2;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover {
        box-shadow: 0px 0px 10px #e5e5e5;
    }
`
