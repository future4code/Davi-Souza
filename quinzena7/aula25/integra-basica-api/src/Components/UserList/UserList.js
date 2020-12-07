import React, { Component } from 'react'
import axios from "axios"
import { API_URL_BASE, HEADER_AUTHORIZATION  } from "../../config";

export default class UserList extends Component {
    state = {
        userList: [],
    }

    componentDidMount = () => {
        this.getUserList()
    }

    getUserList = () => {
        axios.get(API_URL_BASE, HEADER_AUTHORIZATION).then((response) => {
            this.setState({userList: response.data})
        }).catch((err) =>{
            console.log(err.message)
        })
    }

    deleteUser = (id) => {
        axios.delete(`${API_URL_BASE}/${id}`, HEADER_AUTHORIZATION).then(() => {
            this.getUserList()
            alert(`Usuário deletado!`)
        }).catch((error) => {
            alert(`Algo estranho aconteceu. ${error.message}`)
        })
    }

    render() {
        const renderedUserList = this.state.userList.map(user => {
            return (
                <p key={user.id}>
                    {user.name}
                    <button onClick= {()=> this.deleteUser(user.id)}>X</button>
                </p>)
        })

        return (
            <div>
                <h2>Usuários Cadastrados:</h2>
                {renderedUserList}
            </div>
        )
    }
}
