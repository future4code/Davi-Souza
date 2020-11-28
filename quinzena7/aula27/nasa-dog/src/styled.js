import styled from "styled-components"

export const AppContainer = styled.div `
    margin: 0;
    padding: 0;
`


export const Title = styled.h1 `
    margin: 0;
    padding: 2vh 0;
    text-align: center;
    background-color: #DB7093;
    color: white;
    font-size: 4vh;
`

export const HomeContainer = styled.div `
    display:flex;
    width: 100vw;
    height: 90.7vh;
    flex-wrap: wrap;
    justify-content: center;
`

export const Star = styled.div `
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 450px) {
        width: 50vw;
    }

`

export const Dogs = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 450px) {
        width: 50vw;
    }

`

export const Button = styled.button `
    cursor: pointer;
    margin: 8px;
    height: 40px;
    width: 200px;
    border: 4px solid #DB7093;
    border-radius: 40px;
    background-color: #DB7093;
    color: white;
    font: inherit;
    font-weight: 700;
    transition: 0.25s;
:hover{
    background-color: white;
    color: #DB7093;
}
`

export const Img = styled.img `
    width: 30vw;
    height: 290px;

    @media(max-width: 450px) {
        width: 100vw;
    }

`
