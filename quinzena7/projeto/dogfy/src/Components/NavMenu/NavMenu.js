import React, { Component } from 'react'
import logo from "../../img/altLogo.png"
import { BtnStandard, BtnLogo } from "../GeneralStyled/Buttons";
import { NavContainer, ButtonsContainer } from "./styled";


export default class NavMenu extends Component {
    render() {
        return (
            <NavContainer>
                <div>
                    <BtnLogo onClick={this.props.goToHome}><img src={logo} alt="Home" /></BtnLogo>
                </div>
                <ButtonsContainer>
                    <BtnStandard width={"120px"} height={"40px"} onClick={this.props.goToNewPlaylist}>Nova Playlist</BtnStandard>
                    <BtnStandard width={"120px"} height={"40px"} onClick={this.props.goToPlaylists}>Minhas Playlists</BtnStandard>
                    <BtnStandard width={"120px"} height={"40px"} onClick={this.props.goToListen}>ouvir</BtnStandard>
                </ButtonsContainer>
                {/* <div>
                    <button>
                        <div>
                            hamburguer menu "https://jonsuh.com/hamburgers/"
                        </div>
                    </button>
                </div> */}
            </NavContainer>
        )
    }
}
