"use client"

import PokelistItem from "@/components/pokelistitem"
import { useEffect, useState } from "react"

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([])
  
    useEffect(function() {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          setPokemons(data.results)
        })
    }, [])
  
    return (
      <main>
        <h1>Pokemons:</h1>
        <ul>
            {pokemons.map(pokemon => <PokelistItem name={pokemon.name}/>)}
        </ul>
      </main>
    )
}