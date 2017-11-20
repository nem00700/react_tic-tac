import React, { Component } from 'react';
import GameField from './GameField';
import PropTypes from "prop-types";

class VsPerson extends Component {
    static contextTypes = {
        size: PropTypes.string,
    };

    render(){
        const { size } = this.context;

        return <GameField vsComputer={false} size={size} />;
    }
}

export default VsPerson;