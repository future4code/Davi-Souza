import React from 'react'
import axios from "axios";

import styled from 'styled-components'

const ButtonsContainer = styled.div `
    margin-bottom: 40px;
    display: flex;
    justify-content: space-around;
`

function ChooseButtons(props) {
    return (
        <ButtonsContainer>
            <button onClick={props.onClickNo}>Urgh!</button>
            <button onClick={props.onClickLike}>Like!</button>
        </ButtonsContainer>
    )
}

export default ChooseButtons

