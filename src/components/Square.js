import React, {Component} from "react";


export default class Square extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <input type="button"
            onClick={this.props.handleClick.bind(null, this.props.index)}
            className="square"
            value={this.props.val}
        />;
    }
}