import React from "react"
import logo from './logo.svg';
import './App.css';
import Agradecimento from "./components/Agradecimento"
import DadosComGraducao from "./components/DadosComGraduacao"
import DadosSemGraduacao from "./components/DadosSemGraduacao"
import DadosGerais from "./components/DadosGerais"

const grauEscolaridade = ["Médio Completo", "Médio Incompleto", "Superior Completo","Superior Incompleto" ]

class App extends React.Component {
  
  state = {
    etapa: "geral",
    escolaridade: ""
  }

  mudaEscolaridade = (event) => {
    this.setState({escolaridade: event.target.value})
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case "geral":
        return (
          <DadosGerais
            lista={grauEscolaridade}
            valueEscolaridade={this.state.escolaridade}
            onChangeEscolaridade={this.mudaEscolaridade}
          />)
      case "comGraduacao":
        return <DadosComGraducao/>
      case "semGraduacao":
        return <DadosSemGraduacao/>
      case "agradecimento":
        return <Agradecimento/>
      default:
        break;
    }
  }

  mudaEtapa = () => {
    if (this.state.etapa === "geral" && (this.state.escolaridade === "Médio Completo" || this.state.escolaridade === "Médio Incompleto" )) {
      this.setState({etapa: "semGraduacao"})
    } else if (this.state.etapa === "geral" && (this.state.escolaridade === "Superior Completo" || this.state.escolaridade === "Superior Incompleto" )) {
      this.setState({etapa: "comGraduacao"})
    } else {
      this.setState({etapa: "agradecimento"})
    }
  }

  renderizaBotao = () => {
    if (this.state.etapa !== "agradecimento") {
      return(
        <button onClick={this.mudaEtapa}>Próxima Etapa</button>
      )
    } else {
      return(
        <p>Agora desligue o computador e vá ler um livro.</p>
      )
    }
  }

  render() {   
    
    return (
      <div className="App">
        <div className="App-header">
          <p><i><b>Made With</b></i></p><img src={logo} className="App-logo" alt="logo" />
          {this.renderizaEtapa()}
          {this.renderizaBotao()}
        </div>
      </div>
    );
  }
}

export default App;
