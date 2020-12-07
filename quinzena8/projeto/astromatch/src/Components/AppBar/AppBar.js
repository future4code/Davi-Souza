import React from 'react'
import {AppBarContainer, AstroWord, MatchWord} from './styles'


export default function AppBar(props) {
    return (
        <AppBarContainer>
            <button onClick={props.goToChoosePage}>escolher</button>
            <h1><AstroWord>astro</AstroWord><MatchWord>match</MatchWord></h1>
            <button onClick={props.goToMatchListPage}>hist</button>
        </AppBarContainer>
    )
}
