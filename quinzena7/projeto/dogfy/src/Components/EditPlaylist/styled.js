import styled from 'styled-components'

export const EditContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    background-image: linear-gradient(white 80%,#91B7D9);
`


export const TrackContainer = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    color: #0468BF;
`

export const SelectContainer = styled.div `
    display: flex;
    width: 100vw;
    background-color: #E39A27;
    border-bottom: 2px solid #0468BF; 
    border-top: 2px solid #0468BF; 
    color: #0468BF;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
    width: 40vw;
    margin: 0 16px;
    overflow-y: scroll;
    height: 50vh;
    @media(max-width: 450px) {
        width: 90vw;
    }

`


