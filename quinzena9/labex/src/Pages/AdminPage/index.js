import React from 'react'
import BackButton from '../../Components/Buttons/BackButton'
import GoToPageButton from "../../Components/Buttons/GoToPageButton";

function AdminPage() {
    return (
        <div>
            <h1>PAINEL ADMINISTRADOR</h1>
            <GoToPageButton path="/trip/new" text="Cadastrar Viagem"/>
            <GoToPageButton path="/trip/details" text="Viagens Cadastradas"/>
            <BackButton/>
        </div>
    )
}

export default AdminPage
