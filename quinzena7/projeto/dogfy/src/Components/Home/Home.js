import React, { Component } from 'react'
import logo from "../../img/altLogo.png"
import { HomeContainer } from "./styled";
import { BtnStandard } from "../GeneralStyled/Buttons";

export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <h1><img src={logo} alt="Spotzoo" /></h1>
                <h2>Suas músicas favoritas interpretadas por animais</h2>
                <BtnStandard height={'60px'} width={"200px"} onClick={this.props.goToNewPlaylist}>NOVA PLAYLIST</BtnStandard>
                <BtnStandard height={'60px'} width={"200px"} onClick={this.props.goToPlaylists}>MINHAS PLAYLISTS</BtnStandard>
                <BtnStandard height={'60px'} width={"200px"} onClick={this.props.goToListen}>OUVIR</BtnStandard>
            </HomeContainer>
        )
    }
}
