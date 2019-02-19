import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: white;
`
export const Relative = styled.div`
    position: relative;
`
export const NotificationDot = styled.div`
    width: 13px;
    height: 13px;
    position: absolute;
    top: 7px;
    right: 7px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: #ee1675;
`
export const Content = styled.div`
    margin-left: 25px;
    display: flex;
    flex-direction: column;
`
export const Name = styled.p`
    color: black;
    font-weight: 500;
    font-size: 18px;
`
export const LastMessage = styled.p`
    margin-top: 12px;
    color: darkgray;
    font-size: 14px;
`
