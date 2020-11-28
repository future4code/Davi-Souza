import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL, AXIOS_CONFIG, TRACKS } from "../../constants/requests";
import { BtnStandard, BtnDelete } from "../GeneralStyled/Buttons";
import { SelectContainer, ListenContainer, ScrollContainer, PlayContainer } from "./styled";

export default class Listen extends Component {
    state = {
        playlists: [],
        id: '',
        trackList: [],
        updateTracks: 0,
        trackName: "",
        trackUrl: ""
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
        }).catch ((error) => {alert(error.message)})
    }

    selectedPlaylist = (e) => {
        this.setState({id: e.target.value})
        console.log(this.state.id)
    }

    playTrack = (url, name) => {
        this.setState({
            trackName: name,
            trackUrl: url
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

        const renderTrackList = this.state.trackList.map((item) => {
            return (
                <p key={item.id}>{item.name}<BtnStandard onClick={() => this.playTrack(item.url, item.name)}> ► </BtnStandard></p>
            )
        })

        const renderTrack = () => {
            return (
                <PlayContainer>
                    <h1>{this.state.trackName}</h1>
                    <iframe 
                        width="100%"
                        height="100%"
                        src= {this.state.trackUrl}
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </PlayContainer>
            )
        }

        return (
            <ListenContainer>
                <div>
                    <SelectContainer>
                        <select 
                            value={this.state.id}
                            onChange={this.selectedPlaylist}
                        >
                            <option value="" disabled>Selecionar Playlist</option>
                            {playlistOptions}
                        </select>
                        <BtnStandard onClick={this.props.goToEditPlaylist}> + músicas</BtnStandard>
                    </SelectContainer>
                    <ScrollContainer>
                        {renderTrackList}
                    </ScrollContainer>
                </div>
                    {renderTrack()}
            </ListenContainer>
        )
    }
}
