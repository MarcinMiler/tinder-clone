import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        90deg,
        rgba(255, 52, 126, 1) 0%,
        rgba(255, 116, 97, 1) 100%
    );
`
export const Wraper = styled.div`
    width: 500px;
    height: 550px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    background-color: white;
`
export const Logo = styled.div`
    height: 100px;
    background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo-Tinder.svg/1280px-Logo-Tinder.svg.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`
export const Center = styled.div`
    display: flex;
    justify-content: center;
`
export const StyledLink = styled(Link)`
    margin-top: 3px;
    font-weight: 500;
    font-size: 16px;
    color: #ee1675;
    text-align: center;
    text-decoration: none;
`
