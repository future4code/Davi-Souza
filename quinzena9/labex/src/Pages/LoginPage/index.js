import React from 'react'
import BackButton from '../../Components/Buttons/BackButton'
import GoToPageButton from "../../Components/Buttons/GoToPageButton";

function LoginPage() {
    return (
        <div>
            <h1>LOGIN</h1>
            <label for="">Usuário:</label>
            <input type="text"/>
            <label for="">Senha:</label>
            <input type="text"/>
            <GoToPageButton path="/admin" text="Login"/>
            <BackButton/>
        </div>
    )
}

export default LoginPage
