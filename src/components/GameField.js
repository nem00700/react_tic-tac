import React, {Component} from 'react';
import Square from './Square';

export default class GameField extends Component{

    state = {
        current_state: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
        player: 1,
        winner_combination: [
        ],
        winner: 0
    }


    componentDidMount(){
        let temp_arr = [];
        let temp_winner_arr = []
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(i == j)
                    temp_arr.push(i + 3*j);
            }
        }
        temp_winner_arr.push(temp_arr);
        temp_arr = [];

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(2 - i == j)
                    temp_arr.push(i + 3*j);
            }
        }
        temp_winner_arr.push(temp_arr.reverse());
        temp_arr = [];

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                temp_arr.push(3*i + j);
            }
            temp_winner_arr.push(temp_arr);
            temp_arr = [];
        }

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                    temp_arr.push(i + 3*j);
            }
            temp_winner_arr.push(temp_arr);
            temp_arr = [];
        }
        this.setState({winner_combination: temp_winner_arr});
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
        var emptySquares = [];
        for(let i = 0; i < 9; i++){
            if(this.state.current_state[i] === ' ')
                emptySquares.push(i);
        }
        if(emptySquares.length === 0)
            return;

        var randIndex = this.getRandomInt(0, emptySquares.length);
        
        var field = this.state.current_state;
        field[emptySquares[randIndex]] = 'O'
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
        const winner = this.state.winner !== 0 ? 'Player ' + (this.state.winner) + ' win' : '';
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
            {winner != 0 ? <div className='winner-field'>{winner}</div> : ''}
            
        </div> ;
    }
}