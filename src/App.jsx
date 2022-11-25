import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Pokemon from './Components/Pokemon'
import Home from './Pages/Home'
import Pokemons from './Pages/Pokemons'
import Tipos from './Pages/Tipos'
import {routes} from './Routes'

function App() {

  return (
      <Routes>
        <Route path={routes.home} element={<Home/>}>
          <Route path={routes.pokemons} element={<Pokemons/>}>
            <Route path={routes.pokemon} element={<Pokemon/>}/>
          </Route>
          <Route path={routes.tipos} element={<Tipos/>}/>
        </Route>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
  )
}

export default App
