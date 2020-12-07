import React, { useState } from 'react'
import AppBar from '../AppBar/AppBar'
import ChoosePage from '../ChoosePage/ChoosePage'


import styled from 'styled-components'
import MatchListPage from '../MatchListPage/MatchListPage'
import { render } from '@testing-library/react'

const MainContainer = styled.div`
    width: 400px;
    height: 99vh;
    border: 1px solid lightgray;
    border-radius: 3px;
    background-color: #282c34;
    color: white;
`

function Main() {
    const [page, setPage] = useState('choosePage')

    const renderPage = () => {
        switch (page) {
            case 'choosePage':
                return <ChoosePage/>
            case 'matchListPage':
                return <MatchListPage/>
            default:
                return <ChoosePage/>
        }
    }

    const goToChoosePage = () => {
        setPage('choosePage')
    }

    const goToMatchListPage = () => {
        setPage('matchListPage')
    }


    return (
        <MainContainer>
            <AppBar 
                goToChoosePage={goToChoosePage} 
                goToMatchListPage={goToMatchListPage}
            />
            {renderPage()}
        </MainContainer>
    )
}


export default Main