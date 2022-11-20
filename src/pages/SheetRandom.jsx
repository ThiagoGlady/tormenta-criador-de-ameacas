import React, { Component } from "react";
import CharacterSheet from "../components/CharacterSheet";
import makeRandomSheet from "../helpers/makeRandomSheet";

export default class SheetRandom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ND: 0,
            showSheet: false,
            randomSheet: {},
        }
    };

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value,
        });
    };

    showCharacter = () => {
        const { ND } = this.state;
        const randomSheet = makeRandomSheet(+ND); 

        this.setState({
            showSheet: true,
            randomSheet,
        });
    }
    
    render() {
        const { ND, showSheet, randomSheet } = this.state;

        return (
        <div>
            <div>
                { 'Qual é o ND desejado? (Deve ser um número entre 1 e 20)' }
            </div>
            <div>
                <input
                    type="number"
                    name="ND"
                    value={ ND }
                    onChange={ this.handleChange }
                />
            </div>
            <div>
                <button
                    type="button"
                    disabled={ !(ND >= 1 && ND <= 20) }
                    onClick={ this.showCharacter }
                >
                    Criar!
                </button>
                {
                    showSheet
                    && (<CharacterSheet ND={ ND } randomSheet={ randomSheet }/>)
                }
            </div>
        </div>
        );
    }
}