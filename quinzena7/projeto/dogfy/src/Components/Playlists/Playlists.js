import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL, AXIOS_CONFIG, TRACKS } from "../../constants/requests";
import { BtnStandard, BtnDelete } from "../GeneralStyled/Buttons";
import { Container, ScrollContainer, PlaylistContainer } from "./styled";


export default class Playlists extends Component {
    state = {
        playlists: [],
        update: 0,
    }
    
    componentDidMount () {
        this.getPlaylists()
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.update !== this.state.update) {
            this.getPlaylists()
        }
    }

    getPlaylists = () => {
        axios.get(BASE_URL,AXIOS_CONFIG).then((response)=>{
            this.setState({playlists: response.data.result.list})
        }) .catch((error) => {alert(error.message)})
    }

    deletePlaylist = (id) => {
        axios.delete(`${BASE_URL}/${id}`, AXIOS_CONFIG).then(() => {
            this.setState({ update: this.state.update + 1 })
        }).catch(error => {
            alert(error.message)
        })
    }


    render() {
        const renderPlaylist = this.state.playlists.map((item) =>{
            return (
                <PlaylistContainer>
                    <p>{item.name}</p>
                    <div>
                        <BtnStandard onClick={this.props.goToEditPlaylist}>Editar</BtnStandard>
                        <BtnDelete onClick={() => this.deletePlaylist(item.id)}>X</BtnDelete>
                    </div>
                </PlaylistContainer>
            )
        })

        return (
            <Container>
                <h3>Playlists</h3>
                <ScrollContainer>
                    {renderPlaylist}
                </ScrollContainer>
            </Container>
        )
    }
}
