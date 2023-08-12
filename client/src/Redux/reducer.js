import { GET_POKEMONS, GET_DETAIL, CLEAR_DETAIL, GET_NAME, CLEAR_POKEMON, ORDER_POKEMONS, ORIGIN_FILTER, GET_TYPES, TYPES_FILTER } from "../utils/actionsConstant";

const initialState = {
  pokemons: [],
  fullPokemons: [],
  pokeDetail: [],
  types: [],
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS: {
          return {...state,
            pokemons: action.payload,
            fullPokemons: action.payload
          };
        }
        case GET_DETAIL: {
          return {...state,
            pokeDetail: action.payload    
          };
        }
        case CLEAR_DETAIL: {
          return {...state,
          pokeDetail: action.payload
          };
        }
        case GET_NAME: {
          return {...state,
            pokemons: action.payload
          };
        }
        case CLEAR_POKEMON: {
          return {...state,
          pokemons: action.payload
          };
        }
        case ORDER_POKEMONS: {
          return {...state,
          pokemons: state.pokemons.map((pokeBox) => {
            return pokeBox.sort((a,b) => {
                if (a.Ataque < b.Ataque && (action.payload === 'C' || action.payload ==='D')) {
                return action.payload === 'C' ? -1 : 1;
              };
              if (a.Ataque > b.Ataque && (action.payload === 'C' || action.payload ==='D')) {
                return action.payload === 'C' ? 1 : -1;
              };
              if (a.Nombre < b.Nombre && (action.payload === 'A' || action.payload ==='B')) {
                return action.payload === 'A' ? -1 : 1;
              };
              if (a.Nombre > b.Nombre && (action.payload === 'A' || action.payload ==='B')) {
                return action.payload === 'A' ? 1 : -1;
              };

              return 0
            })
          })
          };
        }
        case ORIGIN_FILTER: {
          let filterPokemons = state.fullPokemons.map((pokeBox) => {
            return action.payload === 'A' 
              ? pokeBox.filter((pokemon) =>  pokemon.Created === true)
              : pokeBox.filter((pokemon) =>  pokemon.Created === false)            
          })
          filterPokemons = filterPokemons.filter((pokeBox) => pokeBox.length > 0)
          return {...state,
          pokemons:  [...filterPokemons],
          };
        }
        case GET_TYPES: {
          return {...state,
            types: action.payload,
          };
        }
        case TYPES_FILTER: {
          let filterPokemons = [];
          let auxBox = [];
          const pokemons = [...state.fullPokemons]        
          

          for(let i = 0; i < pokemons.length ; i++) {
            let box = pokemons[i];
            for(let j = 0; j < box.length; j++) {
              let pokemon = box[j];
              for(let f = 0; f < pokemon.Tipo.length; f++) {
                let tipo = pokemon.Tipo[f]
                if(tipo === action.payload) {
                  if(auxBox.length < 26) {
                    auxBox.push(pokemon);                   
                  } else {
                    filterPokemons.push(auxBox);
                    auxBox = [];
                    auxBox.push(pokemon);              
                  }
                }
 
              }
            }
          }

          filterPokemons.push(auxBox);
                    
          return {...state,
            pokemons: [...filterPokemons],
          };
        }
        default:
            return {...state}; 
    }
}

export default rootReducer;