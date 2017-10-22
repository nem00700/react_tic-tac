import React, {Component} from 'react';
import Square from './Square';

export default class GameField extends Component{
    state = {
        current_state: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
        player: 1,
        winner_combination: [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]
        ],
        winner: 0
    }

    handleClick(index){
        if(this.state.winner === 0){
            if(this.state.current_state[index] === ' '){
                var field = this.state.current_state;
                field[index] = this.state.player === 1 ? 'X' : 'O';
                this.setState({current_state: field, player: this.state.player === 1 ? 2 : 1});
                this.checkWinner(this.state.player);
            }
            
            if(this.props.vsComputer){
                this.computerStep();
            }
        }    
    }

    computerStep(){
        var randIndex = this.getRandomInt(0, 9);
        var checkEmptySquare = false;
        for(let i = 0; i < 9; i++){
            if(this.state.current_state[i] === ' ')
                checkEmptySquare = true;
        }
        if(!checkEmptySquare)
            return;

        while(this.state.current_state[randIndex] !== ' ')
            randIndex = this.getRandomInt(0, 9);
        
        var field = this.state.current_state;
        field[randIndex] = 'O'
        this.setState({current_state: field, player: 1});
        this.checkWinner(2);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    checkWinner(player){
        const cur_sign = player === 1 ? 'X' : 'O';
        const cur_state = this.state.current_state;
        const combination = this.state.winner_combination;
        for(let i = 0; i < this.state.winner_combination.length; i++){
            if(cur_state[combination[i][0]] === cur_sign && 
                cur_state[combination[i][1]] === cur_sign &&
                cur_state[combination[i][2]] === cur_sign){
                    this.setState({winner: player})
                    return true;
                }
        }
        return false;
    }


    render(){
        const winner = this.state.winner !== 0 ? 'Player ' + (this.state.winner) + ' won' : '';
        const squares = [];

        for(let i = 0; i < 9; i++){
            squares.push(<Square key={i}
            index={i} 
            handleClick={this.handleClick.bind(this)} 
            val={(this.state.current_state[i])}
            />)
        }


        return <div className="field">
            {squares}
            <div>{winner}</div>
        </div> ;
    }
}