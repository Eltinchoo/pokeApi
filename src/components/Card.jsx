import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Card = () => {
    const [pokemon, setPokemon] = useState({})
    const [isDecimeters, setIsDecimeters] = useState(true)
    const [isHectograms, setIsHectograms] = useState(true)

    const randomPokemon = Math.floor(Math.random() * 600)+1
    
    const randomNewPokemon = Math.floor(Math.random() * 600)+1
    const [newPokemon, setNewPokemon] = useState(randomNewPokemon)
    
    const newPoke = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemon}/`)
        .then(res => setPokemon(res.data))
        setNewPokemon(newPokemon+1)
    }
  

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
        .then(res => setPokemon(res.data))
    }, [])
    const changeUnits = () => {
        setIsDecimeters(!isDecimeters)
        setIsHectograms(!isHectograms)
    }
  console.log(pokemon);
    
 
    return (
        <div className='card-container'>
            
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" style={{height: "150px"}} />
            <br/>
            <b>Weight:</b> {isHectograms? pokemon.weight + ' hectograms' : pokemon.weight/10 + ' kilograms'}
            <br/>
            <b>Height:</b>  {isDecimeters? pokemon.height + " decimeters": pokemon.height/10 + ' meters' }
            <br/>
            <b>Type</b> :{pokemon.types?.[0].type.name}
            <br/>
            <div className='btn-container'>
            <button onClick={changeUnits}>
                change units
            </button>
            
            <button onClick={newPoke}>new pokemon</button>
            </div>
        </div>
    );
};

export default Card;