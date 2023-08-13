import style from './Detail.module.css'
import { getDetail, clearDetail, clearPokemon, switchNavBar } from '../../Redux/actions';
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFN } from '../../utils/functions';
import Loading from '../../Componets/Loading/Loading';
import Flecha from '../../utils/assets/Flecha.png'
import pokeDex from '../../utils/assets/pokedex.png'
import pokeDexLogo from '../../utils/assets/Pokédex_logo.png'
import Flecha2 from '../../utils/assets/Flecha2.png'



function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch();
    dispatch(switchNavBar(false))
    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch(clearDetail())
            dispatch(clearPokemon())
            // dispatch(switchNavBar(true))
        }
    },[dispatch,id])
    const pokemon =  useSelector(state=>state.pokeDetail);
    

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
            <div className={style.container}>
            <Link to={'/home'}>
                <img className={style.flecha} src={Flecha} alt='Go Back'/>
            </Link>
            <Link to={'/form'}>
                <img className={style.flecha2} src={Flecha2} alt='Go Form'/>
            </Link>
            <img className={style.pokeDexLogo} src={pokeDexLogo} alt='Poke Dex'/>
            <img className={style.pokeDex} src={pokeDex} alt='Poke Dex'/>
            { pokemon.Nombre? (
                
                <div className={style.containerdata}>
                    <div className={style.contenedorBox}>
                        <div  className={style.contenedorNombre}>
                            <p>N°: {pokemon.ID}</p>
                            <p>Nombre: {capitalize}</p>
                        </div> 
                    </div>
                    
                <img className={style.imgPoke} src={pokemon.Imagen} alt='foto Pokemon'/>
                    
                    <div className={style.stats}>
                        <p>HP: {pokemon.Vida}</p>
                        <p>Attaque: {pokemon.Ataque}</p>
                        <p>Defensa: {pokemon.Defensa}</p>
                        <p>Velocidad: {pokemon.Velocidad}</p>
                        <p>Altura: {pokemon.Altura}</p>
                        <p>Peso: {pokemon.Peso}</p>
                        {pokemon.Tipo && pokemon.Tipo.map((type) =>{
                            return <p key={type}>Tipo: {type}</p>
                })}
                    </div>
                </div>
            ):(
                <p>Loading...</p>
            )}
            </div>    
        )
    }
    

}

export default Detail;