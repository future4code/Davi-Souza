import React, { Component } from 'react'
import axios from "axios"
import { API_URL_BASE, HEADER_AUTHORIZATION  } from "../../config";

export default class UserRegister extends Component {
    state = {
        inputNameValue: "",
        inputEmailValue: ""
    }


    onChangeInputNameValue = (event) => {
        this.setState({inputNameValue: event.target.value})
    }

    onChangeInputEmailValue = (event) => {
        this.setState({inputEmailValue: event.target.value})
    }

    addUser = () => {
        const body = {
            name: this.state.inputNameValue,
            email: this.state.inputEmailValue
        }

        axios.post(API_URL_BASE, body, HEADER_AUTHORIZATION).then((response) => {
            alert(`Usuário ${this.state.inputNameValue} cadastrado com sucesso!`)
            this.setState({inputNameValue: "", inputEmailValue: ""});
        }).catch((error) => {
            alert(`Algo errado não está certo. ${error.message}`)
        })
    }


    render() {
        return (
            <div>
                <label>Nome</label>
                <input 
                    placeholder = "nome"
                    value = {this.state.inputNameValue}
                    onChange = {this.onChangeInputNameValue} 
                />
                <label>Email</label>
                <input
                    placeholder = "email"
                    value = {this.state.inputEmailValue}
                    onChange = {this.onChangeInputEmailValue} 
                />
                <button onClick= {this.addUser}>Cadastrar</button>
            </div>
        )
    }
}
