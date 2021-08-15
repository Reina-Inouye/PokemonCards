import React, { Component } from 'react';
import '../App.css';
import { FadeTransform } from 'react-animation-components';

// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Pokecard extends Component {


    render() {
        let n = String(this.props.cardinfo.id).padStart(3, '0')
        return (
            <FadeTransform
            in
                transformProps={{
                    exitTransform: 'scale(0.5) translateX(-750%)'
                }}>
            
            <div className="card">
                <h3 style={{ padding: "20px" }}>{this.props.cardinfo.name}</h3>
                <div className="image">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${n}.png`} alt={this.props.cardinfo.name}/>
                </div>
                <div className="container">
                    <p>Type: {this.props.cardinfo.type}</p>
                    <p> EXP: {this.props.cardinfo.base_experience}</p>
                </div>
            </div>
     </FadeTransform>
        );
    }
}

export default Pokecard;
