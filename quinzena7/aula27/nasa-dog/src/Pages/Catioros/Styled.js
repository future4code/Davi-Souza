import styled from "styled-components"

export const Nav = styled.nav `
    margin: 0;
    padding-top: 2vh;
    text-align: center;
    background-color: white;
    color: white;
`

export const Button = styled.button `
    cursor: pointer;
    margin: 8px;
    height: 40px;
    width: 240px;
    border: 4px solid #DB7093;
    border-radius: 40px;
    background-color: #DB7093;
    color: white;
    font: inherit;
    font-weight: 700;
    transition: 0.25s;
:hover{
    background-color: white;
    color: palevioletred;
}
`

export const ImgSection = styled.section `
    width: 100vw;
    min-height: 90vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    background-image: linear-gradient(white 1%,#E79EB6);
`

export const Img = styled.img `
    display: flex;
    max-width: 80vw;
    margin: 16px;
    border-radius: 20px;
`
