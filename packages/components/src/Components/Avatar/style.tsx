import styled from 'styled-components'

interface AvatarProps {
    size: number
    url: string
    border?: boolean
}

interface DotProps {
    parentSize: number
}

export const Container = styled.div<AvatarProps>`
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    position: relative;
    border-radius: 50%;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    box-sizing: content-box;
`
export const NotificationDot = styled.div<DotProps>`
    width: 14px;
    height: 14px;
    margin: ${p => -(14 / 2) + 'px'};
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 2px solid white;
    background-color: #ee1675;
    transform: ${p =>
        'rotate(-45deg) ' +
        'translate(' +
        p.parentSize / 2 +
        'px)' +
        'rotate(45deg)'};
`
