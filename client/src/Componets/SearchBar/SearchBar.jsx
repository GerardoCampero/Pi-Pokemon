import { Link } from "react-router-dom"; 
import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar () {
    const [searchInput, setSearchInput] = useState('');
    const changeHandler = (event) => {
        setSearchInput(event.target.value);
    };
    return (
        <div>
            <input required="" className={style.input}
                onChange={changeHandler}
                type="text"
                placeholder="Buscá tu Pokémon!"></input>
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <Link to={`/home/${searchInput}`}>
                <button className={style.go}>GO</button>
            </Link>

        </div>
    )
}