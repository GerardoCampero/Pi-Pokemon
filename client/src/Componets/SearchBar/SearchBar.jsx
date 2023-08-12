import { Link } from "react-router-dom"; 
import { useState } from "react";

export default function SearchBar () {
    const [searchInput, setSearchInput] = useState('');
    const changeHandler = (event) => {
        setSearchInput(event.target.value);
    };
    return (
        <div>
            <input
                onChange={changeHandler}
                type="text"
                placeholder="Buscá tu Pokémon!"></input>
            <Link to={`/home/${searchInput}`}>
                <button>GO</button>
            </Link>

        </div>
    )
}