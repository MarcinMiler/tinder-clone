import styled from 'styled-components'

interface ImgProps {
    url: string
}

export const Container = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Text = styled.div`
    margin-top: 6px;
    color: black;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
`
export const Relative = styled.div`
    position: relative;
`
export const GoldBorder = styled.div`
    width: 84px;
    height: 84px;
    border: 4px solid #eea851;
    border-radius: 50%;
`
export const BluredImg = styled.div<ImgProps>`
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    margin: 4px;
    border-radius: 50%;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    filter: blur(2px);
`
export const LikesCount = styled.div`
    width: 50px;
    height: 50px;
    margin: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    background: linear-gradient(90deg, rgba(238, 168, 81, 1) 0%, rgba(255, 238, 110, 1) 100%);
    border-radius: 50%;
    color: white;
    font-weight: 500;
    font-size: 16px;
`
