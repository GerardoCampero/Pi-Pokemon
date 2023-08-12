import { useState } from "react";
import { pokeOrder } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const OrderPokemons = () => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    
    const handleOrder = (event) =>{
        const order = event.target.value;
        dispatch(pokeOrder(order));
        setAux(!aux);
    }
    
    return (
        <div>
            <select defaultValue={'DEFAULT'} onChange={handleOrder}>
                <option value='DEFAULT' selected disabled>Ordenar por:</option>
                <option value='A' >A-Z</option>
                <option value='B' >Z-A</option>
                <option value='C' >-Ataque</option>
                <option value='D' >+Ataque</option>
            </select>
        </div>
    )
}


export default OrderPokemons;