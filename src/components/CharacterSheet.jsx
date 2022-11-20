import React, { Component } from "react";

export default class CharacterSheet extends Component {

    getAttack = (sheet) => {
        const atkTypes = [
            'Ataque C. a C.',
            'À Distância'
        ];

        if (sheet.function === 'Porradeiro') return atkTypes[0];

        return atkTypes[1];
    };

    render() {
        const { randomSheet } = this.props;

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
                { `${this.getAttack(randomSheet)}: N` }
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