import axios from 'axios'

//Constants
let initialData = {
    pokemon: {},
    pokemons: [],
    exist: false,
    message: ""
}

let GET_POKEMON = "GET_POKEMON"
let GET_POKEMON_ERROR = "GET_POKEMON"

//Reducer
export default function reducer(state = initialData, action) {
    switch(action.type) {
        case GET_POKEMON:
            return {...state, pokemon: action.payload, exist: true}
        case GET_POKEMON_ERROR:
            return {...state, message: action.payload, exist: false}
        default:
            return state
    }
}

//Actions creators (thunk)
export let getPokemonsAction = (pokemon) => (dispatch, getState) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
                .then(response => {
                    dispatch({
                        type: GET_POKEMON,
                        payload: response.data
                    })
                })
                .catch(error => {
                    dispatch({
                        type: GET_POKEMON_ERROR,
                        payload: error.response.data
                    })
                })
}