import React from 'react'
import BackButton from '../../Components/BackButton'
import axios from "axios"
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { FormContainer } from '../../Components/FormContainer';
import { MainContainer } from '../../Components/MainContainer';

function LoginPage() {
    const urlLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/davi-garcia-tang/login"
    const history = useHistory()
    const [form, onChangeInput] = useForm({
        email:'',
        password:''
    })

    const onSubmitLogin = (e) => {
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post(urlLogin, body).then((response) => {
            window.localStorage.setItem("token", response.data.token)
            history.push("/admin")
        }).catch((error) => {
            alert(`${error}: Verifique login e senha`)
        })
    }

    return (
        <MainContainer>
            <h1>LOGIN</h1>
            <FormContainer onSubmit={onSubmitLogin}>
                <TextField
                    label='Email'
                    type='email'
                    onChange={onChangeInput}
                    value={form['email']}
                    name={'email'}
                />
                <TextField
                    label='Senha'
                    type='password'
                    onChange={onChangeInput}
                    value={form['password']}
                    name={'password'}
                />
                <Button 
                    variant='contained' 
                    color='primary'
                    size="small" 
                    type={'submit'}
                >
                    Entrar
                </Button>
            </FormContainer>

            <BackButton/>
        </MainContainer>
    )
}

export default LoginPage
