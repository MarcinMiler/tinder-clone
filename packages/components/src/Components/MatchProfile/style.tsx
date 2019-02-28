import styled from 'styled-components'

import { FiBriefcase, FiBook } from 'react-icons/fi'

interface ImageProps {
    url: string
}

export const Container = styled.div`
    width: 350px;
    height: 100vh;
    background-color: #edf4f5;
`
export const ProfileImage = styled.div<ImageProps>`
    width: 100%;
    height: 500px;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
`
export const Content = styled.div`
    padding: 15px;
    color: #4f4f4f;
`
export const Name = styled.p`
    font-weight: 600;
    font-size: 22px;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
`
export const JobIcon = styled(FiBriefcase)`
    margin: 2px 5px 0 0;
    font-size: 18px;
`
export const BookIcon = styled(FiBook)`
    margin: 2px 5px 0 0;
    font-size: 18px;
`
export const Text = styled.p`
    margin-top: 5px;
    font-weight: 500;
    font-size: 16px;
`
export const Description = styled.div`
    max-height: 60px;
    margin: 30px 0 10px 0;
    overflow: hidden;
    font-size: 16px;
`
