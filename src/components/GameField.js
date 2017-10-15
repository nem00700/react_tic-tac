import React, {Component} from 'react';
import Square from './Square';

export default class GameFiled extends Component{
    state = {
        current_state: [' ',' ',' ',' ',' ',' ',' ',' ',' '],
        player: 1
    }

    handleClick(index){
        if(this.state.current_state[index] === ' '){
            this.state.current_state[index] = this.state.player === 1 ? 'X' : 'O';
            this.setState({current_state: this.state.current_state,
                player: this.state.player === 1 ? 2 : 1
            });
        }
    
    }


    render(){

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
        </div> ;
    }
}