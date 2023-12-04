"use client"

import { useEffect, useState } from "react"

export default function Info({ params }) {
    const [data, setData] = useState({})
    
    useEffect(function() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then(response => response.json())
        .then(result => setData(result))
    }, [])

    console.log(data);

    return (
        <>
            <h1 className="text-3xl capitalize">{data.name}</h1>
            <img src={data.sprites && data.sprites.other["official-artwork"].front_default}/>
            <p>height: {data.height}</p>
            <p>weight: {data.weight}</p>
            <p>types:</p>
            <ul>
                {data.types && data.types.map(elem => <li>{elem.type.name}</li>)}
            </ul>
        </>
    )
}