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
        winner: false
    }

    handleClick(index){
        if(!this.state.winner){
            if(!this.props.vsComputer || this.state.player == 1){
                if(this.state.current_state[index] === ' '){
                    this.state.current_state[index] = this.state.player === 1 ? 'X' : 'O';
                    if(this.checkWinner(this.state.player === 1 ? 1 : 2)){
                        this.setState({winner: true});
                    }
                    this.setState({current_state: this.state.current_state,
                        player: this.state.player === 1 ? 2 : 1
                    });
                }
            }else{
                this.computerStep();
            }
        }
    }

    computerStep(){

    }

    checkWinner(player){
        const cur_sign = player === 1 ? 'X' : 'O';
        const cur_state = this.state.current_state;
        const combination = this.state.winner_combination;
        for(let i = 0; i < this.state.winner_combination.length; i++){
            if(cur_state[combination[i][0]] === cur_sign && 
                cur_state[combination[i][1]] === cur_sign &&
                cur_state[combination[i][2]] === cur_sign)
                return true;
        }
        return false;
    }


    render(){
        const winner = this.state.winner ? 'Player ' + (this.state.player === 1 ? 2 : 1) + ' won' : '';
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