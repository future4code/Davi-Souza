import React from 'react'
import BackButton from '../../Components/Buttons/BackButton'
import GoToPageButton from '../../Components/Buttons/GoToPageButton'

function TripListPage() {
    return (
        <div>
            <h1>LISTA DE VIAGENS</h1>
            <p>lista</p>
            <GoToPageButton path="/trip/subscribe" text="Inscrever-se" />
            <BackButton/>
        </div>
    )
}

export default TripListPage
