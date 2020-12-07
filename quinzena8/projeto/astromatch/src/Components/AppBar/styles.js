import styled from 'styled-components'

export const AppBarContainer = styled.div `
    background-color: #282c34;
    border-bottom: 1px solid lightgray;
    height:40px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 8px;
`

// h1{
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%);
//   }

export const AstroWord = styled.span `
    color: rgb(117, 49, 146);
    font-weight: 500;
`

export const MatchWord = styled.span `
    color: rgb(74, 163, 151);
    font-weight: 500;
`