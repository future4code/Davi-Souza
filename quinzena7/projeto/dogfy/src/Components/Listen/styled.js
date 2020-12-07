import styled from 'styled-components'

export const ListenContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-grow: 1;
    background-image: linear-gradient(white 80%,#91B7D9);
`


export const PlayContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65vw;
    height: 80vh;
    color: #0468BF;
    margin-left: 16px;
    @media(max-width: 450px) {
        width: 100vw;
        margin-left: 0;
    }
`

export const SelectContainer = styled.div `
    display: flex;
    width: 30vw;
    background-color: #E39A27;
    border-bottom: 2px solid #0468BF; 
    border-top: 2px solid #0468BF; 
    color: #0468BF;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media(max-width: 450px) {
        width: 100vw;
    }
select {
    margin: 1em 8px;
    padding: .25em;
    border: 0;
    border-bottom: 2px solid #0468BF; 
    color: #0468BF;
    background-color: transparent;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: .15em;
    border-radius: 0;
    &:focus, &:active {
    outline: 0;
    border-bottom-color: #F2F2F2;
  }
}
option {
    color: #0468BF;
}
`

export const ScrollContainer = styled.div `
    width: 30vw;
    overflow-y: scroll;
    height: 65vh;
    @media(max-width: 450px) {
        width: 90vw;
        height: 200px;
    }

`