import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #edf4f5;
`
export const Wrap = styled.div`
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const Scroll = styled.div`
    /* height: calc(100vh - 91px); */
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
`
