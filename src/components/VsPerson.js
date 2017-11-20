import React from 'react';
import GameField from './GameField';
import PropTypes from "prop-types";

const VsPerson = ( a = {}, context ) =>
    <GameField vsComputer={false} size={context.size} />;


VsPerson.contextTypes = {
    size: PropTypes.string,
}

export default VsPerson;