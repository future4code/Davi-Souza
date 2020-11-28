import styled from 'styled-components'

export const NavContainer = styled.nav `
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: space-between;

    @media(max-width: 450px) {
        justify-content: center;
    }

`

export const ButtonsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;

    @media(max-width: 450px) {
        justify-content: center;
        flex-direction: column;
    }

`
