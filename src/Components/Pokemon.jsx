import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
    const params = useParams()
    const [poke, setPoke] = useState({})
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`

    useEffect(() => {
        axios(url)
        .then(res => setPoke(res.data))
    }, [params])

  return (
    <div>
        <h1>{poke.name}</h1>
        <img src={poke.sprites?.front_default} alt="" />
    </div>
  )
}

export default Pokemon