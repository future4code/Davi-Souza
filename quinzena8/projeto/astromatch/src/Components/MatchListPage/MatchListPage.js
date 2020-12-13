import React, { useEffect, useState } from 'react'
import MatchListItem from './MatchListItem'
import styled from 'styled-components'
import axios from 'axios';
import { BASE_URL } from "../../config/index";

const ListContainer = styled.div `
    padding: 8px;
`

function MatchListPage() {
    const [matches, setMatches] = useState([])

    const getMatchList = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/matches')
            .then(response => {
                console.log(response)
                setMatches(response.data.matches)
        })
    }

    useEffect(() => {
        getMatchList()
    }, [])

    return (
        <ListContainer>
            {matches.map((profile) => {
                return <MatchListItem profile={profile}/>
            })}
        </ListContainer>
    )
}

export default MatchListPage
