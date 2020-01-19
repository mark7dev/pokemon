import axios from 'axios'

//Constants
let initialData = {
    array: [],
    message: ""
}

let GET_POKEMON_ERROR = "GET_POKEMON_ERROR"
let ADD_POKEMON = "ADD_POKEMON"

//Reducer
export default function reducer(state = initialData, action) {
    switch(action.type) {
        case GET_POKEMON_ERROR:
            return {...state, message: action.payload}
        case ADD_POKEMON:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//Actions
export let addPokemonAction = (pokemon) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then(response => {
                let newPokemon = response.data
                let pokemonsArray = getState().pokemons.array
                pokemonsArray.push(newPokemon)
                dispatch({
                    type: ADD_POKEMON,
                    payload: {array: [...pokemonsArray]}
                })
                resolve()
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: GET_POKEMON_ERROR,
                    payload: error.response.data
                })
                reject()
            })
    })
    
}
