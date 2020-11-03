import React, { Component } from 'react'


export default class DadosGerais extends Component {
    render() {
      const renderOpcoes = this.props.lista.map((itemOpcao) => {
        return <option value={itemOpcao}>{itemOpcao}</option>
      })



      return (
          <div>
              <div className="App-header">
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <label>1. Qual seu nome?</label>
                <input type="text" placeholder="Nome"/>
                <label>2. Qual sua idade?</label>
                <input type="text" placeholder="Idade"/>
                <label>3. Qual seu email?</label>
                <input type="text" placeholder="Email"/>
                <label>4. Qual seu grau de escolaridade?</label>
                <select value={this.props.valueEscolaridade} onChange={this.props.onChangeEscolaridade}>
                  <option value="" data-default disabled selected>Escolaridade</option>
                  {renderOpcoes}
                </select>
              </div>
          </div>
      )
    }
}
