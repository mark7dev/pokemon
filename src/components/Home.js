import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { getPokemonsAction, addPokemonAction } from '../redux/pokemonsDuck'

function Home({pokemons, getPokemonsAction, addPokemonAction}) {

    const [homeState, saveHomeState] = useState({
        nameId: '',
        disabledBtn: true
    })


    const getPoks = () => {

        let param = homeState.nameId
        // getPokemonsAction(param)
        addPokemonAction(param)
        // console.log(param);
        saveHomeState({nameId: ''})
        document.getElementById("nameId").value = ""
        // disabledBtn()
    }

    const test = () => {
        let name = homeState.nameId
        console.log(name);
    }

    // const disabledBtn = () => {
    //     if(homeState.nameId === '') {
    //         homeState.disabledBtn = true
    //     } else {
    //         homeState.disabledBtn = false
    //     }
    // }

    // function handleChange(e) {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     let pokemon = e.target.value
    //     return pokemon
    // }

    const handleChange = e => {
        e.preventDefault();
        saveHomeState({
            nameId: e.target.value
        })
    }

    return (
        <Fragment>
            <input id="nameId" type="text" onChange={handleChange}></input>
            <button onClick={getPoks}>CATCH POKEMON!</button>
            <button onClick={test}>TEST</button>
        </Fragment>
    )
}

function mapState({ pokemons }) {
    return{
        pokemons: pokemons
    }
  }

  export default connect( mapState, {getPokemonsAction, addPokemonAction})(Home)



