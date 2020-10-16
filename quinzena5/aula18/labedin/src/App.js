import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import mailIcon from './icons/mail.png'
import mapIcon from "./icons/map.png";
import profileImage from './img/profile-andy.png'
import leadWorkshop from './img/leadWorkshop.png'
import rememberBirthday from './img/rememberBirthday.png'
import microManagement from './img/microManagement.png'
import meetGiantfish from './img/meetGiantFish.png'
import turnIntoAjet from './img/turnIntoAJet.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {profileImage}
          nome="Mr. Samberg" 
          descricao= "I'm the boss. I'll take you through a day in the life of a boss. The first thing I do is..." 
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem= {mailIcon}
          campo= "Email: "
          conteudo= "like@boss.com"
        />

        <CardPequeno
          imagem= {mapIcon}
          campo= "Endereço: "
          conteudo= "Lonely Island"
        />


      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {leadWorkshop}
          nome="Lead Workshop" 
          descricao="Like A Boss!" 
        />
        
        <CardGrande 
          imagem= {rememberBirthday} 
          nome="Remember Birthdays" 
          descricao="Like A Boss!" 
        />

        <CardGrande 
          imagem= {microManagement} 
          nome="Micro Management" 
          descricao="Like A Boss!" 
        />

        <CardGrande 
          imagem= {meetGiantfish} 
          nome="Meet A Giant Fish" 
          descricao="Like A Boss!" 
        />

        <CardGrande 
          imagem= {turnIntoAjet} 
          nome="Turn Into A Jet" 
          descricao="Like A Boss!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
