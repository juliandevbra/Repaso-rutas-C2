import React from 'react'
import { Link } from 'react-router-dom'
import {routes} from '../Routes'
const Navbar = () => {
  return (
    <div>
        <Link to={routes.home}><p>Home</p></Link>
        <Link to={routes.pokemons}><p>Pokemon</p></Link>
        <Link to={routes.tipos}><p>Tipos</p></Link>
    </div>
  )
}

export default Navbar