import { useState } from "react"
import { reqPokemon } from "../services/pokemon"
 
export const usePokemon = () =>{
    const [pokemon, setPokemon] = useState([])
    const [nombre,setNombre] = useState("")
 
    const handleGetPokemon = (e, nombre) =>{
        e.preventDefault()

        const pokemon = reqPokemon(nombre);
        setPokemon(pokemon);

        setNombre(nombre)
    }

    return{
        handleGetPokemon,
        pokemon,
        nombre
    }
}
 