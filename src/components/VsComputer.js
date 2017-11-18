import React, { Component } from 'react';
import GameField from './GameField';

export default class VsComputer extends Component {

    render(){
        return <GameField vsComputer={true} size={5} />;
    }
}