import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100vw;
    color: #0468BF;
    background-image: linear-gradient(white 80%,#91B7D9);
`

export const ScrollContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 90vw;
    margin: 0 16px;
    overflow-y: scroll;
    height: 70vh;
    font-weight: 700;
    letter-spacing: .15em;
`

export const PlaylistContainer = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid #0468BF;
    border-radius: 20px;
    margin: 8px;
    padding: 0 8px;
    padding-bottom: 4px;
    :hover {
        background-color: #F2F2F2;
    }
    p {
        margin-left: 8px;
    }

`