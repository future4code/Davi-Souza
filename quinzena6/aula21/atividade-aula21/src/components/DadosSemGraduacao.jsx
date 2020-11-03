import React, { Component } from 'react'

export default class DadosSemGraduacao extends Component {
    render() {
        let cursoComplementar = ["Curso Técnico", "Curso de Inglês", "Não fiz curso complementar"]

        return (
            <div>
                <div className="App-header">
                  <h3>ETAPA 2 - INFORMAÇÕES EDUCACIONAIS</h3>
                  <label>1. Por que não fez um curso superior?</label>
                  <input type="text" placeholder="Conte-nos um pouco" />
                  <label>2. Fez algum curso complementar?</label>
                  <select>
                    {cursoComplementar.map(curso => (
                      <option value={curso}>{curso}</option>
                    ))}
                  </select>
                </div>                    
            </div>
        )
    }
}
