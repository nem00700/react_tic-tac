import React, { Component } from 'react';
import GameField from './GameField';
import PropTypes from "prop-types";

class VsComputer extends Component {
    static contextTypes = {
        size: PropTypes.string,
    };

    render(){
        const { size } = this.context;

        return <GameField vsComputer={true} size={size} />;
    }
}

export default VsComputer;