import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import BackButton from '../../Components/BackButton'
import FullWidthGrid from '../../Components/FullWidthGrid'
import { MainContainer } from '../../Components/MainContainer'

const urlTrips = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-garcia-tang/trips"

function TripListPage() {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    const getTripList = () => {
        Axios.get(urlTrips).then((res) => {
           setTrips(res.data.trips)
        }).catch((error) => {console.log(error)})
    }

    useEffect(() => {
        getTripList()
    }, [history])

    const renderTrips = () => {
        return (
            <FullWidthGrid array={trips}/>
        )
    }

    return (
        <MainContainer>
            <h1>LISTA DE VIAGENS</h1>
            {renderTrips()}
            <BackButton/>
        </MainContainer>
    )
}

export default TripListPage
