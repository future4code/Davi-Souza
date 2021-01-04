import React, { useState } from 'react'
import BackButton from '../../Components/BackButton'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useForm } from "../../hooks/useForm";
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { FormContainer } from '../../Components/FormContainer';
import { Button, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MainContainer } from '../../Components/MainContainer';


function NewTripPage() {
    const [form, onChangeInput] = useForm({
        name: '',
        planet: '',
        description: '',
        duration: ''
    })
    useProtectedPage()
    const history = useHistory()
    const [date, setDate] = useState(new Date())
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        const body = {
            name: form.name,
            planet: form.planet,
            date: formattedDate,
            description: form.description,
            durationInDays: form.duration
        }
        Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-garcia-tang/trips', body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then((res) => {
            history.push('/admin')
        })

    }

    return (
        <MainContainer>
            <h1>CADASTRAR NOVA VIAGEM</h1>
            <FormContainer onSubmit={onSubmitForm}>
                <TextField
                    label={'Nome'}
                    onChange={onChangeInput}
                    name={'name'}
                    value={form['name']}
                />
                <TextField
                    label={'Planeta'}
                    onChange={onChangeInput}
                    name={'planet'}
                    value={form['planet']}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='DD/MM/yyyy'
                    margin='normal'
                    label='Data'
                    value={date}
                    onChange={date => setDate(date)}
                />
                <TextField
                    label={'Descrição'}
                    onChange={onChangeInput}
                    name={'description'}
                    value={form['description']}
                />
                <TextField
                    label={'Duração em dias'}
                    type={'number'}
                    onChange={onChangeInput}
                    name={'duration'}
                    value={form['duration']}
                />
                <Button 
                    variant='contained'
                    color='primary'
                    type='submit'
                >
                    Criar viagem
                </Button>
            </FormContainer>
            <BackButton/>
        </MainContainer>
    )
}

export default NewTripPage
