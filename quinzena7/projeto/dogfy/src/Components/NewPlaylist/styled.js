import styled from 'styled-components'

export const NewContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100vw;
    color: #0468BF;
    background-image: linear-gradient(white 80%,#91B7D9);
`

export const CreateContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonContainer = styled.div `
    display: flex;
    align-items: center;
    flex-wrap:  wrap;
    justify-content: center;
`


export const Input = styled.input`
    border: 0;
    border-bottom: 2px solid #0468BF;
    margin-bottom: 8px;
    outline: 0;
    font-size: 1.3rem;
    color: #0468BF;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    ::placeholder {
        color: #91B7D9
    }

    :focus{
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        color: #0468BF
    }
`





