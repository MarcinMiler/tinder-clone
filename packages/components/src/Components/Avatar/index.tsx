import styled from 'styled-components'

interface AvatarProps {
    size: number
    url: string
}

export const Avatar = styled.div<AvatarProps>`
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    border-radius: 50%;
    border: 2px solid white;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
`
