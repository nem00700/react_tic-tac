import React, { Component } from 'react';
import GameField from './GameField';

export default class VsPerson extends Component {

    render(){
        return <GameField vsComputer={false} size={4} />;
    }
}