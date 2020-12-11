import React, { useState, useEffect } from 'react';
import axios from "axios";

function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemon(props.pokemon)
    }, [pokemon])

    const getPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(
            response => {setPokemon(response.data)})
        .catch(err => {
          console.log(err);
        });
    }

    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            )}
        </div>
    )
}

export default PokeCard