import style from './Detail.module.css'
import { getDetail, clearDetail, clearPokemon } from '../../Redux/actions';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFN } from '../../utils/functions';
import Loading from '../../Componets/Loading/Loading';



function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch(clearDetail())
            dispatch(clearPokemon())
        }
    },[dispatch,id])
    const pokemon =  useSelector(state=>state.pokeDetail);
    console.log(pokemon)

    let capitalize='';

    if(pokemon.length !== 0) capitalize = capitalizeFN(pokemon.Nombre);
    
    if(pokemon.length === 0){
        return (
            <div>
                <Loading/>
            </div>
        ) 
    } else {
        return (
            <div>
            { pokemon.Nombre? (
                
                <div className={style.container}>
                <p>{pokemon.ID}</p>
                <p>{capitalize}</p>
                <img src={pokemon.Imagen} alt='foto Pokemon'/>
                <p>{pokemon.Vida}</p>
                <p>{pokemon.Ataque}</p>
                <p>{pokemon.Defensa}</p>
                <p>{pokemon.Velocidad}</p>
                <p>{pokemon.Altura}</p>
                <p>{pokemon.Peso}</p>
                {pokemon.Tipo && pokemon.Tipo.map((type) =>{
                    return <p>{type}</p>
                })}
                </div>
            ):(
                <p>Loading...</p>
            )}
            </div>    
        )
    }
    

}

export default Detail;