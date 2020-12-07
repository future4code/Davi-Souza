import React, { Component } from 'react'
import UserList from "./Components/UserList/UserList";
import UserRegister from "./Components/UserRegister/UserRegister";

export default class App extends Component {
  state = {
    register: true
  }

  changeScreen = () => {
    this.setState({register: !this.state.register})
  }

  render() {
    return (
      <div>
        <button onClick={this.changeScreen}>{this.state.register ? "Usuários Cadastrados" : "Cadastrar Novo usuário"}</button>
        {this.state.register ? <UserRegister/> : <UserList/>}
      </div>
    )
  }
}
