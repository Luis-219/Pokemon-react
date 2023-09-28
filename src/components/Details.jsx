import React, { useEffect, useState } from "react";
import './Details.css'
import { useParams } from "react-router-dom";

const Details = () =>{
    
    const {name} = useParams()
    const [pokemon, setpokemon] = useState({})

    const getpokemon = async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name);
        const data = await response.json();
        console.log(data);
        let abilities = []
        data.abilities.forEach( ab => {
            abilities.push(ab.ability.name);
        });
        let types = []
        data.types.forEach( type => {
            types.push(type.type.name);
        });

        const getpoke = {
            name: data.name,
            order: data.order,
            base_xp: data.base_experience,
            height: data.height,
            abilities: abilities,
            types: types,
            img: data.sprites.other.dream_world.front_default
        }
        setpokemon(getpoke);
    }
    console.log(pokemon)

    useEffect(() =>{
        getpokemon();
    }, [])
    return(
        <>
            <div className="pokemon">
                <div className="img">
                    <img className= "picture" src={pokemon.img} alt="" />
                </div>
                <div className="dts">
                    <div className="up">
                        <h1 className="title">#{pokemon.order} <span className="name">{pokemon.name}</span></h1>
                    </div>
                    <h3 className="add">Experiencia base: <span className="sub">{pokemon.base_xp}</span></h3>
                    <h3 className="add">Altura: <span className="sub">{pokemon.height}</span></h3>
                    <h3 className="add">Habilidades:</h3>
                    {
                        pokemon.abilities?.map((ab) => {
                            return <h3 className="sub">#{ab}</h3>
                        })
                    }
                    <h3 className="add">Tipos:</h3>
                    {
                        pokemon.types?.map((ty) => {
                            return <h3 className="sub">#{ty}</h3>
                        })
                    }
                </div>
            </div>
        </>
    );

}

export default Details