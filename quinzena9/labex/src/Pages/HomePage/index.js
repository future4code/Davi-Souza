import React from 'react'
import GoToPageButton from "../../Components/Buttons/GoToPageButton";

function HomePage() {
    return (
        <div>
            <h1>HOME PAGE</h1>
            <GoToPageButton path="/login" text="Login" />
            <GoToPageButton path="/trip/list" text="Viagens" />
        </div>
    )
}

export default HomePage
