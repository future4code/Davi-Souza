import React from 'react'
import BackButton from '../../Components/BackButton'
import GotoPageBtn from "../../Components/GotoPageBtn";
import { MainContainer } from '../../Components/MainContainer';

function ErrorPage() {
    return (
        <MainContainer>
            <h1>404</h1>
            <h2>Algo errado não está certo!</h2>
            <GotoPageBtn variant='contained' color='primary' path="/" text="Ir para Home"/>
            <BackButton/>
        </MainContainer>
    )
}

export default ErrorPage
