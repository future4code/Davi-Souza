import React from 'react'
import BackButton from '../../Components/BackButton'
import TextField from '@material-ui/core/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useTripsList } from '../../hooks/useTripList';
import { useForm } from '../../hooks/useForm';
import Axios from 'axios';
import { FormContainer } from '../../Components/FormContainer';
import { MainContainer } from '../../Components/MainContainer';


function TripSubscribePage() {
    const trips = useTripsList()
    const [form, onChangeInput] = useForm({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: null
    })

    const onSubmitApplication = (e) => {
        e.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-garcia-tang/trips/${form.trip.id}/apply`, body)
    }

    return (
        <MainContainer>
            <h1>INSCREVER-SE NA VIAGEM</h1>
            <FormContainer onSubmit={onSubmitApplication}>
                <TextField 
                    id="outlined-basic" 
                    label="Nome" 
                    variant="outlined" 
                    onChange={onChangeInput}
                    value={form['name']}
                    name={'name'}
                />
                <TextField 
                    id="outlined-basic"
                    type={'number'}
                    label="Idade" 
                    variant="outlined"
                    onChange={onChangeInput}
                    value={form['age']}
                    name={'age'} 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Texto de aplicação" 
                    helperText='Explique por que você é um bom candidato'
                    variant="outlined" 
                    multiline 
                    onChange={onChangeInput}
                    value={form['applicationText']}
                    name={'applicationText'}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Profissão" 
                    variant="outlined" 
                    onChange={onChangeInput}
                    value={form['profession']}
                    name={'profession'}
                />
                <TextField 
                    id="outlined-basic" 
                    label="País" 
                    variant="outlined"
                    onChange={onChangeInput}
                    value={form['country']}
                    name={'country'}
                />    

                <FormControl>
                    <InputLabel id='selectTrip'>Viagens</InputLabel>
                    <Select
                        labelId="selectTrip"
                        onChange={onChangeInput}
                        value={form['trip']}
                        name={'trip'}
                    >

                        {trips.map((trip) => {
                            return (
                                <MenuItem value={trip}>{trip.name}</MenuItem>
                            )
                        })}

                    </Select>
                </FormControl>        
                <Button variant='contained' color='primary' type={'submit'} >Confirmar</Button>
            </FormContainer>
            <BackButton/>
        </MainContainer>
    )
}

export default TripSubscribePage
