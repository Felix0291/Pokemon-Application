import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

let PokemonApplication = () => {
    let [pokemons, setPokemons] = useState([])
    let [selectedPokemonUrl, setSelectedPokemonUrl] = useState("")
    let [pokemonInfo, setPokemonInfo] = useState(null)
    let [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        let getPokemon = async () => {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            let json = await response.json()
            setPokemons(json.results)
        }
        getPokemon()
    }, [])

    let pokemonDetails = async (url) => {
        let response = await fetch(url)
        let json = await response.json()
        setPokemonInfo(json)
    }

    let pokemonChange = (e) => {
        setSelectedPokemonUrl(e.target.value)
    }

    let handleSubmit = () => {
        selectedPokemonUrl && selectedPokemonUrl !== "Välj en Pokémon" ? (setIsSubmitted(true), pokemonDetails(selectedPokemonUrl)) : null
    }
    
    return (
        <>        
        <p>Välj en Pokémon och tryck på Pokébollen för att fånga den!</p>
            <select className="dropdown" onChange={pokemonChange} value={selectedPokemonUrl}>
                <option>Välj en Pokémon</option>
                {pokemons.map((pokemon, i) => (
                    <option key={i} value={pokemon.url}>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </option>
                ))}
            </select>
            <button className="getBtn" onClick={handleSubmit}><img className="pokeball" src="https://th.bing.com/th?id=OPHS.zQudqpAi9Vr%2BcQ474C474&w=180&h=180&c=17&o=5&pid=21.1" alt="" />    </button>

            {isSubmitted && pokemonInfo && <Pokemon data={pokemonInfo} />}
        </>
    )
}

export default PokemonApplication



