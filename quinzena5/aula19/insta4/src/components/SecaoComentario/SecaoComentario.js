import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentarios: [],
		valorInputComentario: ""
	}

	onChangeComentario = (event) => {
		this.setState({valorInputComentario: event.target.value})
	}

	adicionaComentario = () => {
		const atualizaComentarios = [this.state.valorInputComentario, ...this.state.comentarios]
		this.setState({
			comentarios: atualizaComentarios
		})
		{this.props.aoEnviar()}
	}

	render() {
		const listaComentarios = this.state.comentarios.map((comentario) => {
			return(
				<p>{comentario}</p>
			)
		})

		return (
		<div>
			<div className={'comment-container'}>
				<input
					className={'input-comentario'}
					placeholder={'Comentário'}
					value={this.state.valorInputComentario}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.adicionaComentario}>Enviar</button>
			</div>
			<div className={'comment'}>{listaComentarios}</div>
		</div>	
		)
	}
}
