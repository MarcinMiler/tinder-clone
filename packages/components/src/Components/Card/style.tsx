import styled from 'styled-components'

import { FiBriefcase, FiBook } from 'react-icons/fi'

interface ContainerProps {
    url: string
}

export const Container = styled.div<ContainerProps>`
    width: 350px;
    height: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 4px;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    user-select: none;
`
export const Name = styled.p`
    color: white;
    font-weight: 600;
    font-size: 22px;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
`
export const JobIcon = styled(FiBriefcase)`
    margin: 2px 5px 0 0;
    color: white;
    font-size: 18px;
`
export const BookIcon = styled(FiBook)`
    margin: 2px 5px 0 0;
    color: white;
    font-size: 18px;
`
export const Text = styled.p`
    margin-top: 5px;
    color: white;
    font-weight: 500;
    font-size: 16px;
`
export const Description = styled.div`
    max-height: 60px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    color: white;
    font-size: 16px;
`
