import React, { Component } from 'react'

export default class DadosComGraduacao extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                  <h3>ETAPA 2 - INFORMAÇÕES EDUCACIONAIS</h3>
                  <label>1. Qual seu curso superior?</label>
                  <input type="text" placeholder="Nome do curso" />
                  <label>2. Onde cursou/cursa sua graduação?</label>
                  <input type="text" placeholder="Instituição de ensino"/>
                </div>
            </div>
        )
    }
}
