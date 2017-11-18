import React, {Component} from "react";


export default class Square extends Component{

    render(){
        return <input type="button"
            onClick={this.props.handleClick.bind(null, this.props.index)}
            className="square"
            value={this.props.val}
            style={{width: this.props.squaresWidth + '%', height: this.props.squaresWidth + '%'}}
        />;
    }
}