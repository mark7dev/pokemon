import React from 'react'
import { connect } from 'react-redux'
import { getPokemonsAction } from '../redux/pokemonsDuck'

function Home({pokemons, getPokemonsAction}) {
    function getPoks() {
        let param = "algo"
        console.log('get');
        getPokemonsAction(param)
    }

    return (
        <div>
            <button onClick={getPoks}>CATCH POKEMON!</button>
        </div>
    )
}

function mapState({ pokemons }) {
    return{
        pokemons: pokemons
    }
  }

  export default connect( mapState, {getPokemonsAction})(Home)



