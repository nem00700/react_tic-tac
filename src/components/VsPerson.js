import React, { Component } from 'react';
import GameField from './GameField';
import { connect } from 'react-redux';

class VsPerson extends Component {

    render(){
        const { size } = this.props;

        return <GameField vsComputer={false} size={size} />;
    }
}

export default connect(
    state => ({
        size: state.game.gameFieldSize,
    })
)(VsPerson);