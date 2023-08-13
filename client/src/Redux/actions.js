import axios from "axios";
import { ENDPOINT, GET_POKEMONS, GET_DETAIL, CLEAR_DETAIL , GET_NAME, CLEAR_POKEMON, ORDER_POKEMONS, ORIGIN_FILTER, GET_TYPES, TYPES_FILTER, SWITCH_NAVBAR} from "../utils/actionsConstant";

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${ENDPOINT}/pokemons`);
            return dispatch({
                type: GET_POKEMONS,
                payload: data,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${ENDPOINT}/pokemons/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    };
};

export const clearDetail = () => {
    return (dispatch) => {
        return dispatch ({
        type: CLEAR_DETAIL,
        payload: [],
        })}
}




export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${ENDPOINT}/pokemons?name=${name}`);
            return dispatch({
                type: GET_NAME,
                payload: data,
            })
        } catch (error) {
            alert(error.response.data.error);
        }
    }
} 

export const clearPokemon = () => {
    return (dispatch) => {
        return dispatch ({
        type: CLEAR_POKEMON,
        payload: [],
        })}
}

export const pokeOrder = (order) => {
    return (dispatch) => {
        return dispatch ({
            type: ORDER_POKEMONS,
            payload: order,
        })
    }
}

export const pokeFilterDB = (filter) => {
    return (dispatch) => {
        return dispatch ({
            type: ORIGIN_FILTER,
            payload: filter,
        })
    }
}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${ENDPOINT}/types`);
            return dispatch({
                type: GET_TYPES,
                payload: data,
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const pokeFilterType = (filter) => {
    return (dispatch) => {
        return dispatch ({
            type: TYPES_FILTER,
            payload: filter,
        })
    }
}

export const switchNavBar = (sw) => {
    return (dispatch) => {
        return dispatch ({
            type: SWITCH_NAVBAR,
            payload: sw,
        })
    }
}