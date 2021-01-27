import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import TripInfo from "./TripInfoCard";
import CandidatesList from "./CandidatesList";
import { ContentContainer } from './styles';
import { useParams } from 'react-router-dom'
import BackButton from '../../Components/BackButton'
import useProtectedPage from '../../hooks/useProtectedPage'
import { MainContainer } from '../../Components/MainContainer';

function TripDetailsPage() {
    const [trip, setTrip] = useState()
    const params = useParams()
    useProtectedPage()

    const getTripDetail = () => {
        Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-garcia-tang/trip/${params.tripId}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then((res) => {
            setTrip(res.data.trip)
        })
    }

    useEffect(() => {
        getTripDetail()
    }, [])

    const decideCandidate = (approve, candidateId) => {
        const body = {
            approve: approve
        }
        Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-garcia-tang/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then(() => {
            getTripDetail()
        }).catch((error) => {
            console.log(params.tripId)
        })
    }

    return (
        <MainContainer>
            <h1>DETALHE DAS VIAGENS</h1>
            {trip ? <ContentContainer>
                <TripInfo info={trip}/>
                <CandidatesList
                    candidates={trip.candidates}
                    decideCandidate={decideCandidate}
                />
            </ContentContainer> : <div>Carregando...</div>}
            <BackButton/>
        </MainContainer>
    )
}

export default TripDetailsPage
