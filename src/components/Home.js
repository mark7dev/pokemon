import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { addPokemonAction } from '../redux/pokemonsDuck'

function Home({pokemons, addPokemonAction}) {

    const [homeState, saveHomeState] = useState({
        nameId: '',
        disabledBtn: true
    })

    const getPokemon = () => {
        let param = homeState.nameId.toLowerCase()
        addPokemonAction(param)
        saveHomeState({nameId: ''})
        document.getElementById("nameId").value = ""
        if(pokemons.exist === false) {
            alert('ERROR!!')
        }
    }

    const handleChange = e => {
        e.preventDefault();      
        saveHomeState({nameId: e.target.value})
    }

    return (
        <Fragment>
            <input id="nameId" type="text" onChange={handleChange}></input>
            <button onClick={getPokemon} disabled={!homeState.nameId}>CATCH POKEMON!</button>
        </Fragment>
    )
}

function mapState({ pokemons }) {
    return{
        pokemons: pokemons
    }
  }

export default connect( mapState, {addPokemonAction})(Home)



