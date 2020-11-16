import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Lorem',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/300/200'
      },
      {
        nomeUsuario: 'Ipsum',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/300/201'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  adicionaPost = () => {
    const inputsNovoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const atualizacaoPosts = [inputsNovoPost, ...this.state.posts];

    this.setState({
      posts: atualizacaoPosts,
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })


  }

  render() {
    const listaDePosts = this.state.posts.map((posts) => {
      return(
        <Post
          nomeUsuario={posts.nomeUsuario}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <input 
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder= "Nome"
        />
        <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder= "URL da foto do perfil"
        />
        <input 
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder= "URL da foto do post"
        />
        <button onClick={this.adicionaPost}>Postar</button>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}

export default App;
