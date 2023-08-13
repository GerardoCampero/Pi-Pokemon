import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeFilterDB, pokeFilterType } from "../../Redux/actions";
import { capitalizeFN } from "../../utils/functions";
import style from "./Filter.module.css"

const FilterPokemonsByCreate = () => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleFilter = (event) =>{
        const filter = event.target.value;
        dispatch(pokeFilterDB(filter));
        setAux(!aux);
    }

    return (
        <div>
            <select className={style.select} defaultValue={'DEFAULT'} onChange={handleFilter}>
                <option value='DEFAULT' selected disabled>Origen:</option>
                <option value='A' >Base de datos</option>
                <option value='B' >API</option>
            </select>
        </div>
    )
}

const FilterPokemonByType = () => {
    const types = useSelector(state=>state.types);
    
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleFilter = (event) =>{
        const filter = event.target.value;
        dispatch(pokeFilterType(filter));
        setAux(!aux);
    }
    return (
        <div>
            <select className={style.select} defaultValue={'DEFAULT'}  onChange={handleFilter}>
                <option value='DEFAULT' selected disabled>Tipo:</option>
                {
                    types?.map((type) => {
                        const nombre = capitalizeFN(type.Nombre)
                        return(
                            <option value={type.Nombre} key={type.ID}>
                                {nombre}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export {
    FilterPokemonsByCreate,
    FilterPokemonByType,
};