import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import OrderPokemons from "../OrderFilter/Order"
import { FilterPokemonsByCreate, FilterPokemonByType } from "../OrderFilter/Filter";




export default function NavBar () {
    return (
        <nav>
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