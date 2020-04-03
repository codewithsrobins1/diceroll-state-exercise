import React, {Component} from 'react';
import './Die.css'

class Die extends Component {
    render (){
        const { face, isRolling } = this.props;
        return (
            <i className={`Die fas fa-dice-${face} ${
                isRolling ? 'shake' : ""
            }`}
            />
        );
    }
}

//add shake class from Die.css if isRolling is true, otherwise dont roll;

export default Die;