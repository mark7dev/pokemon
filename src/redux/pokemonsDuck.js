import axios from 'axios'

//Constants
let initialData = {
    array: [],
    exist: false,
    message: ""
}

let GET_POKEMON_ERROR = "GET_POKEMON_ERROR"
let ADD_POKEMON = "ADD_POKEMON"

//Reducer
export default function reducer(state = initialData, action) {
    switch(action.type) {
        case GET_POKEMON_ERROR:
            return {...state, message: action.payload, exist: false}
        case ADD_POKEMON:
            return {...state, ...action.payload, exist: true}
        default:
            return state
    }
}

//AUX
export let addPokemonAction = (pokemon) => (dispatch, getState) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
                .then(response => {
                    console.log(response);
                    let newPokemon = response.data
                    let pokemonsArray = getState().pokemons.array
                    pokemonsArray.push(newPokemon)
                    dispatch({
                        type: ADD_POKEMON,
                        payload: {array: [...pokemonsArray]}
                    })
                })
                .catch(error => {
                    console.log(error);
                    dispatch({
                        type: GET_POKEMON_ERROR,
                        payload: error.response.data
                    })
                })
}
