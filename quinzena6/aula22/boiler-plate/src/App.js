import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const usuario = {
  nome: "a",
  idade: 12,
  email: "a@a.a",
  nome: "c"
}

const novoUsuario = {
  ...usuario,
    nome: "b"
  }

console.log(usuario)
console.log(novoUsuario)

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: "teste 1",
          completa: false
        },
        {
          id: Date.now(),
          texto: "teste 2",
          completa: true
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const arrayTarefas = this.state.tarefas

    const arrayString = JSON.stringify(arrayTarefas)

    localStorage.setItem("guardaTarefas", arrayString)
    console.log(arrayTarefas)
  };

  componentDidMount() {
    const arrayString = localStorage.getItem("guardaTarefas")
    const arrayTarefas = JSON.parse(arrayString)
    if (arrayTarefas) {
      this.setState({tarefas: arrayTarefas})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const atualizaTarefas = [...this.state.tarefas,novaTarefa] 
    
    this.setState({
      tarefas: atualizaTarefas,
      inputValue: ''
    })
  }

  selectTarefa = (id) => {
    const atualizaTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const completaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return completaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({
      tarefas: atualizaTarefa
    })
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
