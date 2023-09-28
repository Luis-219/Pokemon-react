import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import './Pokemon.css'

const Pokemon = () =>{

    const [pokemon, setpokemon] = useState([]);

    useEffect(() =>{

        const getpokemon = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
            const data = await response.json();
            const results = data.results;
            
            const pokemones = results.map( async (pokemon) =>{
                const response = await fetch(pokemon.url);
                const newpkm = await response.json();
                return{
                    id: newpkm.id,
                    name: newpkm.name,
                    img: newpkm.sprites.other.dream_world.front_default
                }
            })
            setpokemon(await Promise.all(pokemones));
        }
        getpokemon();
    }, [])
    
    function Pokemoncard(pokemon){
        return(
            <Link to={"/pokemon/" + pokemon.name} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="card">
                    <img className="image" src={pokemon.img} alt={pokemon.name}/>
                    <div className="details">
                        <p className="name">
                            {pokemon.name}
                        </p>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <>
            <Navbar></Navbar>
            <section className="pokemon-box">

                {pokemon.map(pokemon => <Pokemoncard {...pokemon} />)}

            </section>
        </>
    );
}

export default Pokemon