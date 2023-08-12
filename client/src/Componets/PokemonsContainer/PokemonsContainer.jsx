import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { useSelector } from "react-redux";





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
        <div>
            <button onClick={prevBox}>Atrás</button>
            <button onClick={nextBox}>Adelante</button>
            {fullPokeBox && fullPokeBox.map((poke) => {
                return <Pokemon
                    key = {poke.ID}
                    ID = {poke.ID}
                    Nombre = {poke.Nombre}
                    Imagen = {poke.Imagen}             
                />
            })}

        </div>
    )
}

export default PokemonContainer;