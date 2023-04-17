import React from 'react'
import PokemonCard from './PokemonCard'


function Deck() {
  
const pika= "Pika Pika!";

  return (
    <div className="Deck">
      <p>{pika}</p>
      <h1>Hello pokeworld!</h1>
        <PokemonCard />

      
    </div>
  )
}

export default Deck
