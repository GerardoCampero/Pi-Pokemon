import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import OrderPokemons from "../OrderFilter/Order"
import { FilterPokemonsByCreate, FilterPokemonByType } from "../OrderFilter/Filter";
import style from "./NavBar.module.css"
import { useSelector } from "react-redux";
import PCdeAlguien from "../../utils/assets/Boton pc de alguien Off.png"
import guardarPokemon from "../../utils/assets/dejar pokemon off.png"
import pokeLogo from '../../utils/assets/logo.png'



export default function NavBar () {
    const sw = useSelector(state=>state.navBarSW)
   

    if(sw) {
        return (
            <nav className={style.nav} >
                <img className={style.logo} src={pokeLogo} alt="Pokémon logo"/>
                <div>
                    <Link to={'/home'}>
                        <img className={style.PCdeAlguien} src={PCdeAlguien} alt={"Home"}/>
                    </Link>
                    <Link to={'/form'}>
                    <img className={style.guardarPokemon} src={guardarPokemon} alt={"Create"}/>
                    </Link>
                </div>
                <div className={style.orderPkm}>
                    <OrderPokemons/>
                </div>
                <div className={style.filterCreate}>
                    <FilterPokemonsByCreate/>
                </div>
                <div className={style.filterType}>
                    <FilterPokemonByType/>
                </div>
                <div className={style.searchBar}>
                    <SearchBar/>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className={style.navNone} >
                <div>
                    <Link to={'/home'}>
                        <span>Home</span>
                    </Link>
                    <Link to={'/form'}>
                        <span>Create</span>
                    </Link>
                </div>
                <div>
                    <OrderPokemons/>
                </div>
                <div>
                    <FilterPokemonsByCreate/>
                </div>
                <div>
                    <FilterPokemonByType/>
                </div>
                <SearchBar/>
            </nav>
        )
    }
}