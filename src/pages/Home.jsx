import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Home extends Component {
    redirectToRandomSheet = () => {
        const { history } = this.props;
        history.push('/sheet/random');
    }

    redirectToSetSheet = () => {
        const { history } = this.props;
        history.push('/sheet/settings');
    }

    render() {
        return (
        <div>
            <div>
                Deseja deixar o computador criar a sua ficha?
            </div>
            <div>
                <button
                    type="button"
                    onClick={ this.redirectToRandomSheet }
                >
                    Sim, eu só me preocupo com o ND
                </button>
                <button
                    type="button"
                    onClick={ this.redirectToSetSheet }
                >
                    Não, eu quero selecionar alguns detalhes
                </button>
            </div>
        </div>
        );
    }
}

Home.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
};