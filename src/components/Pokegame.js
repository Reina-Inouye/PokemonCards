import React, { Component } from 'react';
import Pokedex from './Pokedex';



class Pokegame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonCards: [
                { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
                { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
                { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
                { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
                { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
                { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
                { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
                { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
            ]
        }
    }
    render() {
        let l = this.state.pokemonCards.length;
        let a = [...this.state.pokemonCards];
        let b = []
        for (let i = 0; i < l / 2; i++) {
            let random = Math.floor(Math.random() * l / 2);
            b[i] = a[random]
            a = [...a.slice(0, random), ...a.slice(random + 1, a.length)];
        }

        let aEXP = 0;
        let bEXP = 0;

        for (let i = 0; i < l / 2; i++) {
            aEXP = aEXP + a[i].base_experience
            bEXP = bEXP + b[i].base_experience
        }

        let isWinnerA = false;
        let isWinnerB = true;
        if (aEXP > bEXP) {
            isWinnerA = true;
            isWinnerB = false;
        }

        return (
            <div>
                
                <h1>Pokegame!</h1>
                <Pokedex cards={a} isWinner = {isWinnerA} total = {aEXP}/>
                <Pokedex cards={b} isWinner = {isWinnerB} total = {bEXP}/>
               
            </div>
        ); 
    }
}

export default Pokegame;
