import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeGamefieldSize } from '../AC';


export class Menu extends Component {
    handleChange(event){
        this.props.changeGamefieldSize(event.target.value);
    }

    render() {
        const { size } = this.props;

        return <div className='nav-block'>
            <input value={this.props.size} onChange={this.handleChange.bind(this)} />
            <Link to="/1vs1"><nav>1 vs 1</nav></Link>
            <Link to="/vscomputer"><nav>1 vs Computer</nav></Link>
        </div>;
    }
}

export default connect(
    state => ({
        size: state.game.gameFieldSize
    }),
    { changeGamefieldSize }
)(Menu);
