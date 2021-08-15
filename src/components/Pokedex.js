import React, { Component } from 'react';
import Pokecard from './Pokecard';
import '../App.css';
import { Fade, Stagger } from 'react-animation-components'


class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }

    componentDidMount() {
        setTimeout(function () { //Start the timer
            this.setState({ render: true }) //After 1 second, set render to true
        }.bind(this), 4000)
    }


    render() {
        let x = ''
        if (this.props.isWinner) {
            x = <h1 className="Winner">This Hand Wins!</h1>
        } else {
            x = <h1 className="Loser">This Hand Loses!</h1>
        }
        let renderContainer = false //By default don't render anything
        if (this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <div><h4> {x} <br /> Total Experience: {this.props.total}</h4></div> //Add dom elements
        }
        return (
            <div>
                
                <Stagger className="Pokedex" delay={400} in>
                        {this.props.cards.map(
                            (p) => (
                                <Fade>
                                <Pokecard cardinfo={p} />
                                </Fade>
                            )
                        )}
                    
                </Stagger>
                
                {renderContainer}
            </div>



        )

    }
}


export default Pokedex;
