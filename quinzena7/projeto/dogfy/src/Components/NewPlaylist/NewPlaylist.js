import React, { Component } from 'react'
import axios from "axios"
import { BASE_URL, AXIOS_CONFIG } from "../../constants/requests";
import { BtnStandard, BtnLogo } from "../GeneralStyled/Buttons";
import { NewContainer, CreateContainer, ButtonContainer, Input } from "./styled";


export default class NewPlaylist extends Component {
    state = {
        input: "",
        create: true
    }

    componentDidMount () {
        this.setState({create: true})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.create !== this.state.create) {
            this.renderScreen()
        }
    }

    createPlaylist = () => {
        const body = {
            name: this.state.input
        }

        axios.post(BASE_URL,body,AXIOS_CONFIG)
            .then(() => {
                this.setState({
                    input: "",
                    create: false
                })
            })
            .catch((error) => alert(error.message))
    }

    changeInput = (e) => {
        this.setState({input: e.target.value})
    }

    createList = () => {
        this.setState({create: true})
    }

    renderScreen = () => {
        if (this.state.create) {
            return (
                <CreateContainer>
                    <Input
                        placeholder="Nome da Playlist" 
                        value={this.state.input} 
                        onChange={this.changeInput} 
                        type="text" 
                    />
                    <BtnStandard height={'32px'} width={"200px"} onClick={() => this.createPlaylist()}>Salvar</BtnStandard>
                </CreateContainer>
            )
        } else {
            return (
                <CreateContainer>
                     <p>Sua Lista foi salva!</p>
                     <ButtonContainer>
                        <BtnStandard height={'40px'} width={"200px"} onClick={() => this.createList()}>Criar outra lista</BtnStandard>
                        <BtnStandard height={'40px'} width={"200px"} onClick={this.props.goToEditPlaylist}>Adicionar Músicas</BtnStandard>
                     </ButtonContainer>
                </CreateContainer>
            )
        }
    }

    render() {

        return (
            <NewContainer>
                <h2>Criar nova Playlist</h2>
                {this.renderScreen()}
            </NewContainer>
        )
    }
}
