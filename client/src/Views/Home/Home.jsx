import PokemonContainer from "../../Componets/PokemonsContainer/PokemonsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonByName, clearPokemon, getTypes, switchNavBar } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import Loading from "../../Componets/Loading/Loading";



function Home() {

    const dispatch = useDispatch();
    let { name } = useParams();
    

    useEffect(() => {
        dispatch(getTypes());
        if(name){
            dispatch(getPokemonByName(name));
            return () => {
                dispatch(clearPokemon());
            }
        } else {
            dispatch(getPokemons());
        }
        
    },[dispatch, name]);

    
  
    const state = useSelector(state=>state.pokemons);
    
    if (state.length < 1) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <PokemonContainer></PokemonContainer>
            </div>
        )
    }



}

export default Home;