import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div `
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    
    :hover {
        background-color: black;   
    }
`

const Avatar = styled.img `
    border-radius: 50%;
    margin-right: 8px;
    width: 30px;
    height: 30px;
`

function MatchListItem(props) {
    const profile = props.profile

    return (
        <ListItemContainer>
            <Avatar src={profile.photo} alt=""/>
            <p>{profile.name}</p>
        </ListItemContainer>
    )
}

export default MatchListItem
