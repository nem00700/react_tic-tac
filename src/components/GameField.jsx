import React, {Component} from 'react';
import Square from './Square';

export default class GameFiled extends Component{

    render(){

        const squares = [];

        for(let i = 0; i < 9; i++){
            squares.push(<Square />)
        }


        return <div>
            {squares}
        </div> ;
    }
}