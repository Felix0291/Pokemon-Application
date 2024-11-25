import { useState } from 'react'
import Pokemon from './components/Pokemon'
import PokemonApplication from './components/PokemonApplication'
import './App.css'


function App() {
  let [show, setShow] = useState(false)
  
  return (
    <>
      <img className="pokemonLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon Logo" />     
      <div className='mainContainer'>
      <button onClick={() => setShow(!show)}>
        {show ? "Stäng Pokémon App" : "Starta Pokémon App"}
        </button>
        {show && <PokemonApplication/>}  
        </div>   
    </>
  )
}

export default App

