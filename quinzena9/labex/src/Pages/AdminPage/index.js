import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton'
import GotoPageBtn from "../../Components/GotoPageBtn";
import { MainContainer } from '../../Components/MainContainer';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useTripsList } from '../../hooks/useTripList';

function AdminPage() {
    const trips = useTripsList()
    useProtectedPage()

    return (
        <MainContainer>
            <h1>PAINEL ADMINISTRADOR</h1>
            <GotoPageBtn 
                variant='contained' 
                color='primary' 
                path="/trip/new" 
                text="Cadastrar Viagem"
            />
            <List component='nav'>
                {trips.map((trip) => {
                    return (
                        <Link to={`/trip/details/${trip.id}`}>
                            <ListItem button>
                                <ListItemText primary={trip.name}/>
                            </ListItem>
                        </Link>
                    )
                })}
            </List>
            <BackButton/>
        </MainContainer>
    )
}

export default AdminPage
