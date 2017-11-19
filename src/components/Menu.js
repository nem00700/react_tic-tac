import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Menu extends Component {
    state = {
        size: 3,
    }

    handleChange(event){
        this.setState({ size: event.target.value });
    }


    render() {
        return <div className='nav-block'>
            <input val={this.state.size} onChange={this.handleChange.bind(this)} />
            <Link to="/1vs1"><nav>1 vs 1</nav></Link>
            <Link to="/vscomputer"><nav>1 vs Computer</nav></Link>
        </div>;
    }
}

export default Menu;
