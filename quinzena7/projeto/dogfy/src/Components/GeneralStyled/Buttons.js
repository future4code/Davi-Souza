import styled from 'styled-components'

export const BtnStandard = styled.button `
    border-radius: 20px;
    background-color: #0468BF ; 
    color:  #F2F2F2;
    height: ${props => props.height};
    width: ${props => props.width};
    margin: 4px;
    border: 2px solid #0468BF;
    transition: 0.25s;
    font-weight: 600;
:hover {
    background-color: #F2F2F2 ;
    color:  #0468BF;
}
:focus {
    outline: 0;
    background-color: #E39A27;
  }

`

export const BtnDelete = styled.button `
    border-radius: 20px;
    background-color: #E39A27 ; 
    color:  #0468BF;
    height: ${props => props.height};
    width: ${props => props.width};
    margin: 4px;
    border: 2px solid #0468BF;
    transition: 0.25s;
    font-weight: 600;
:hover {
    background-color: #F2F2F2 ;
    color:  #0468BF;
}
:focus {
    outline: 0;
    background-color: #E39A27;
  }

`


export const BtnLogo = styled.button ` 
    cursor: pointer;
    border: 1px solid white;
    padding: 0;
    img{
        width: 200px;
    }

    @media(max-width: 450px) {
        img {
            width: 100vw;  
        }
    }
`