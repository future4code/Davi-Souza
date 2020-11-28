import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL, AXIOS_CONFIG, TRACKS } from "../../constants/requests";
import { BtnStandard, BtnDelete } from "../GeneralStyled/Buttons";
import { SelectContainer, EditContainer, ScrollContainer, TrackContainer } from "./styled";



export default class EditPlaylist extends Component {
    state = {
        playlists: [],
        id: '',
        trackList: [],
        updateTracks: 0,
        systemTracks: TRACKS
    }

    componentDidMount () {
        this.getPlaylists()
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getTracks()
        }
        if (prevState.updateTracks !== this.state.updateTracks) {
            this.getTracks()
        }
    }

    getPlaylists = () => {
        axios.get(BASE_URL,AXIOS_CONFIG).then((response)=>{
            this.setState({playlists: response.data.result.list})
        }) .catch((error) => {alert(error.message)})
    }

    getTracks = () => {
        axios.get(`${BASE_URL}/${this.state.id}/tracks`,AXIOS_CONFIG).then((response) => {
            this.setState({trackList: response.data.result.tracks})
            console.log(this.state.trackList)
            console.log(response.data)
        }).catch ((error) => {
            console.log(error.message)
            console.log(this.state.trackList)
        })
    }

    selectedPlaylist = (e) => {
        this.setState({id: e.target.value})
        console.log(this.state.id)
    }

    addTrack = (trackName, trackArtist, trackUrl) => {
        const body = {
            name: trackName,
            artist: trackArtist,
            url: trackUrl
        }

        axios.post(`${BASE_URL}/${this.state.id}/tracks`, body, AXIOS_CONFIG).then(() => {
            this.setState({ updateTracks: this.state.updateTracks + 1 })
        }).catch(error => {
            alert(error.message)
        })
    }

    delTrack = (trackId) => {
        axios.delete(`${BASE_URL}/${this.state.id}/tracks/${trackId}`, AXIOS_CONFIG).then(() => {
            this.setState({ updateTracks: this.state.updateTracks + 1 })
        }).catch(error => {
            alert(error.message)
        })
    } 

    render() {
        const playlistOptions = this.state.playlists.map((item) =>{
            return (
                <option 
                    key={item.id}
                    value={item.id}
                >
                    {item.name}
                </option>
            )
        })

        const renderTracks = this.state.trackList.map((item) => {
            return (
                <p>{item.name}<BtnDelete onClick={() => this.delTrack(item.id)}>X</BtnDelete></p>
            )
        })

        const renderSystemTracks = this.state.systemTracks.map((item) =>{
            return (
                <p>{item.name}<BtnStandard onClick={() => this.addTrack(item.name, item.artist, item.url)}>+</BtnStandard></p>
            )
        })


        return (
            <EditContainer>
                <SelectContainer>
                    <h3>Adicionar Músicas na lista</h3>
                    <select 
                        value={this.state.id}
                        onChange={this.selectedPlaylist}
                    >
                        <option value="" disabled>Selecionar Playlist</option>
                        {playlistOptions}
                    </select>
                </SelectContainer>
                <TrackContainer>
                    <div>
                        <h4>Escolha suas músicas:</h4>
                        <ScrollContainer>
                            {renderSystemTracks}
                        </ScrollContainer>
                    </div>
                    <div>
                        <h4>Sua lista:</h4>
                        <ScrollContainer>
                            {renderTracks}
                        </ScrollContainer>
                    </div>
                </TrackContainer>
                <BtnStandard width={"120px"} height={"40px"} onClick={this.props.goToListen}>Ouvir</BtnStandard>
            </EditContainer>
        )
    }
}
