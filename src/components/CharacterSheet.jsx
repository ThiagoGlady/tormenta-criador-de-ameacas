import React, { Component } from "react";
import conjuraDorNames from "../database/names/conjuraDorNames/conjuraDorNames";

export default class CharacterSheet extends Component {

    getAttack = (sheet) => {
        const atkTypes = [
            'Ataque C. a C.',
            'À Distância'
        ];

        if (sheet.function === 'Porradeiro') return atkTypes[0];

        return atkTypes[1];
    };

    generateRandom = (min, max) => {
        const randomNumber = Math.random()*(max-min);
        return Math.floor(randomNumber) + min;
    };

    getName = (threatFunction, subFunction) => {
        console.log(subFunction);
        if (threatFunction === 'ConjuraDor') {
            const randomNameIndex = this.generateRandom(0, conjuraDorNames[subFunction].length);
            
            return conjuraDorNames[subFunction][randomNameIndex];
        }

        return 'Name';
    };

    getDamage = (damage) => {
        const arrayDados = [
            {nome:'d4', media:2.5},
            {nome:'d6', media:3.5},
            {nome:'d8', media:4.5},
            {nome:'d10', media:5.5},
            {nome:'d12', media:6.5},
        ];

        const dadoObtido = arrayDados[this.generateRandom(0, arrayDados.length)];

        const qntDadosPermitida = Math.floor(damage / dadoObtido.media);
        const qntDadosGerada = this.generateRandom(1, qntDadosPermitida);
        const atkBonus = Math.floor(damage - (qntDadosGerada * dadoObtido.media)); 

        return `${qntDadosGerada}${dadoObtido.nome} + ${atkBonus}`;
    }

    render() {
        const { randomSheet } = this.props;

        return (
        <div>
            <div>
                { this.getName(randomSheet.function, randomSheet.subFunction) }
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
                Defesa: { randomSheet.defense }
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
                { `${this.getAttack(randomSheet)}: ${this.getDamage(randomSheet.damage)}` }
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