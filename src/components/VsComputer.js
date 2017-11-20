import React from 'react';
import GameField from './GameField';
import PropTypes from "prop-types";

const VsComputer = (a = {}, context ) => 
    <GameField vsComputer={true} size={context.size} />;

VsComputer.contextTypes = {
    size: PropTypes.string,
}

export default VsComputer;