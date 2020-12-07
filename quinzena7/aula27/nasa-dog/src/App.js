import React, { Component } from 'react'
import Catioros from "./Pages/Catioros/Catioros";
import Stargaze from "./Pages/Stargaze/Stargaze";
import { AppContainer, HomeContainer, Star, Dogs, Title, Button, Img} from "./styled";
import dogImage from "./img/catioro.jpg";
import spaceImage from "./img/space.png"

export default class App extends Component {
  state = {
    page: "home"
  }

  changePage = (pageName) => {
    this.setState({page: pageName})
  }

  renderPage = () => {
    switch (this.state.page) {
      case "home":
        return this.renderHome()
      case "catioro":
        return <Catioros setPage={() => this.changePage("home")}/>
      case "stargaze":
        return <Stargaze setPage={() => this.changePage("home")}/>    
      default:
        return this.renderHome()
    }
  }

  renderHome = () => {
    return(
      <div>
        <Title>O QUE VOCÊ QUER VER?</Title>
        <HomeContainer>
          <Star>
            <Img src={spaceImage} alt="" />
            <Button onClick={() => this.changePage("stargaze")}>O infinito e além!</Button>
          </Star>

          <Dogs>
            <Img src={dogImage} alt="" />
            <Button onClick={() => this.changePage("catioro")}>Catioros!</Button>
          </Dogs>  
        </HomeContainer>
      </div>
    )
  }
  
  render() {
    return (
      <AppContainer>
        {this.renderPage()}
      </AppContainer>
    )
  }
}
