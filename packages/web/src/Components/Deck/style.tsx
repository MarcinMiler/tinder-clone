import styled from 'styled-components'

export const B = styled.div`
    overscroll-behavior-y: contain;
    height: 100%;
    width: 100%;
    user-select: none;
    position: fixed;
    overflow: hidden;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    will-change: transform;
    background-color: #f2fafc;
`
export const C = styled.div`
    position: absolute;
`
export const Item = styled.div`
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 400px;
    height: 600px;
    will-change: transform;
    border-radius: 10px;
`
