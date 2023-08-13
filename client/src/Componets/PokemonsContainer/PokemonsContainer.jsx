import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { useSelector } from "react-redux";
import style from "./PokemonsContainer.module.css"
import Box from "../../utils/assets/PCBox.png"





const PokemonContainer = ()=>{

    const pokeData = useSelector(state=>state.pokemons);
    const [pokeBox, setPokebox] = useState(0);
    const fullPokeBox = pokeData[pokeBox];
    
    if(pokeData.length < pokeBox + 1) setPokebox(0);
    
    const  nextBox = () => {
        if(pokeBox < pokeData.length -1) setPokebox(pokeBox + 1);
    };

    const prevBox = () => {
        if(pokeBox > 0) setPokebox(pokeBox - 1);
    };
    
    return(
        <div className={style.pokeBox}>
            <button className={style.prevBox} onClick={prevBox}></button>
            <span className={style.boxNum}>Box N°: {pokeBox}</span>
            <button className={style.nextBox}  onClick={nextBox}>Adelante</button>
            <img className={style.Box} src={Box} alt="Poke Box" />
            <div className={style.renderPokemon}>
                {fullPokeBox && fullPokeBox.map((poke) => {
                    return <Pokemon
                        key = {poke.ID}
                        ID = {poke.ID}
                        Nombre = {poke.Nombre}
                        Imagen = {poke.Imagen}             
                    />
            })}
            </div>
        </div>
    )
}

export default PokemonContainer;