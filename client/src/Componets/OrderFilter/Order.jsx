import { useState } from "react";
import { pokeOrder } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import style from "./Order.module.css"

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
            <select className={style.select} defaultValue={'DEFAULT'} onChange={handleOrder}>
                <option value='DEFAULT' selected disabled>Ordenar:</option>
                <option value='A' >A-Z</option>
                <option value='B' >Z-A</option>
                <option value='C' >-Ataque</option>
                <option value='D' >+Ataque</option>
            </select>
        </div>
    )
}


export default OrderPokemons;