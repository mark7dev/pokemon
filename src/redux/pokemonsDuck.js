//Constants
let initialData = {
    pokemons: []
}

let GET_POKEMONS = "GET_POKEMONS"


//Reducer
export default function reducer(state = initialData, action) {
    switch(action.type) {
        case GET_POKEMONS:
        default:
            return state
    }
}

//Actions