import styled from "styled-components"

export const Nav = styled.nav `
    margin: 0;
    padding: 20px 0;
    text-align: center;
    background-color: black;
    color: white;
`

export const Button = styled.button `
    cursor: pointer;
    margin: 4px 16px;
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

export const Section = styled.section `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
h3 {
    font-size: 2em;
    font-weight: 700;
    margin: 0;
}
img {
    width: 100%;
    max-width: 800px;
}
article {
    max-width: 800px;
    margin: 20px 5px;
}

`