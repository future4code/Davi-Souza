import React, { Component } from 'react'
import Home from "./Components/Home/Home";
import NewPlaylist from "./Components/NewPlaylist/NewPlaylist";
import Playlists from "./Components/Playlists/Playlists";
import EditPlaylist from "./Components/EditPlaylist/EditPlaylist"
import Listen from "./Components/Listen/Listen"
import NavMenu from "./Components/NavMenu/NavMenu"
import { MainContainer } from "./styled";


export default class App extends Component {
  state = {
    page: "home"
  }

  renderPage = () => {
    switch (this.state.page) {
      case "home":
        return (
          <Home 
            goToNewPlaylist={()=> this.changePage("newPlaylist")} 
            goToPlaylists={()=> this.changePage("playlists")}
            goToListen={()=> this.changePage("listen")}
          />
        )
      case "newPlaylist":
        return (
          <>
            <NavMenu
              goToHome={() => this.changePage("home")}
              goToNewPlaylist={()=> this.changePage("newPlaylist")} 
              goToPlaylists={()=> this.changePage("playlists")}
              goToListen={()=> this.changePage("listen")}
            />
            <NewPlaylist 
              goToEditPlaylist={() => this.changePage("editPlaylist")}
            />
          </>
        )
      case "editPlaylist":
        return (
          <>
            <NavMenu
              goToHome={() => this.changePage("home")}            
              goToNewPlaylist={()=> this.changePage("newPlaylist")} 
              goToPlaylists={()=> this.changePage("playlists")}
              goToListen={()=> this.changePage("listen")}
            />
            <EditPlaylist 
              goToListen={()=> this.changePage("listen")}
            />
          </>
        )
      case "listen":
        return (
          <>
            <NavMenu
              goToHome={() => this.changePage("home")}            
              goToNewPlaylist={()=> this.changePage("newPlaylist")} 
              goToPlaylists={()=> this.changePage("playlists")}
              goToListen={()=> this.changePage("listen")}
            />
            <Listen
              goToEditPlaylist={() => this.changePage("editPlaylist")}              
            />
          </>
        )
      case "playlists":
        return (
          <>
            <NavMenu
              goToHome={() => this.changePage("home")}            
              goToNewPlaylist={()=> this.changePage("newPlaylist")} 
              goToPlaylists={()=> this.changePage("playlists")}
              goToListen={()=> this.changePage("listen")}
            />
            <Playlists
              goToEditPlaylist={() => this.changePage("editPlaylist")}
            />
          </> 
        )
      default:
        return <Home/>
    }
  }


  changePage = (pageName) => {
    this.setState({page: pageName})
    console.log(`mudou de pagina, ${pageName}`)
  }


  render() {
    return (
      <MainContainer>
        {this.renderPage()}
      </MainContainer>
    )
  }
}

