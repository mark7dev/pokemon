import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { addPokemonAction } from '../redux/pokemonsDuck'
import './Home.css'

function Home({pokemons, addPokemonAction}) {

    const [homeState, saveHomeState] = useState({
        nameId: '',
        disabledBtn: true
    })

    const cleanInput = () => {
        saveHomeState({nameId: ''})
        document.getElementById("nameId").value = ""
    }

    const getPokemon = () => {
        let param = homeState.nameId.toLowerCase()
        addPokemonAction(param)
        .then(() => {
            cleanInput()
        })
        .catch(() => {
            cleanInput()
            alert('NOT FOUND!')
        })
    }

    const handleChange = e => {
        e.preventDefault();      
        saveHomeState({nameId: e.target.value})
    }

    return (
        <Fragment>
            <h1 className="title">POKEMONS</h1>
            <div className="search__container">
                <input id="nameId" type="text" onChange={handleChange}></input>
                <button onClick={getPokemon} disabled={!homeState.nameId} className="btnCatch">CATCH POKEMON!</button>
            </div>
            <div className="cards__container">
                {pokemons.array.map(pokemon => (
                    <div className="card" key={pokemon.id}>
                        <img src={pokemon.sprites.front_default}></img>
                        <div className="info">
                            <h5>Id: #{pokemon.id}</h5>
                            <h5>Name: {pokemon.name}</h5>
                        </div>
                    </div>
                ))}      
            </div>
        </Fragment>
    )
}

function mapState({ pokemons }) {
    return{
        pokemons: pokemons
    }
  }

export default connect( mapState, {addPokemonAction})(Home)



