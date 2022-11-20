import React, { Component } from "react";
import makeRandomSheet from "../helpers/makeRandomSheet";

export default class CharacterSheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            randomSheet: {},
        }
    }

    componentDidMount() {
        const { ND } = this.props;

        this.setState({
            randomSheet: makeRandomSheet(+ND),
        });
    }

    render() {
        const { randomSheet } = this.state;

        return (
        <div>
            <div>
                Nome
            </div>
            <br />
            <div>
                { `${randomSheet.function} ${randomSheet.subFunction} ${randomSheet.ND}` }
            </div>
            <br />
            <div>
                Tamanho
            </div>
            <br />
            <div>
                Iniciativa:
                Percepção:
            </div>
            <br />
            <div>
                Defesa:
            </div>
            <br />
            <div>
                Fortitude:
                Reflexos:
                Vontade:
            </div>
            <br />
            <div>
                PV:
                { randomSheet.PV }
                <br />
                Deslocamento: 9m
            </div>
            <br />
            <div>
                Ataque C. a C. ou à Distância: 
            </div>
            <br />
            <div>
                Habilidades
            </div>
            <br />
            <div>
                For X, Des X, Con X, Int X, Sab X, Car X 
            </div>
            <br />
            <div>
                Perícias
            </div>
            <br />
            <div>
                Tesouros:
            </div>
        </div>
        );
    }
}