import React from 'react'
import BackButton from '../../Components/Buttons/BackButton'
import GoToPageButton from "../../Components/Buttons/GoToPageButton";

function ErrorPage() {
    return (
        <div>
            <h1>404</h1>
            <h2>Algo errado não está certo!</h2>
            <GoToPageButton path="/" text="Home"/>
            <BackButton/>
        </div>
    )
}

export default ErrorPage
