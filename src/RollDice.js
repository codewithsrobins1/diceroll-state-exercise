import React, {Component} from 'react';
import Die from './Die.js'
import './RollDice.css'

class RollDice extends Component {
    //Default Props
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    //Working With State
    constructor(props) {
       super(props);
       this.state = {
           die1: 'one', 
           die2: 'two', 
           isRolling: false
        } 
       this.roll = this.roll.bind(this); //Want instance of component to be value of this
    }

    //Function to Roll the dice
    roll () { 
        //pick 2 new rolls from the default props array
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        //Set the state with new roll
        this.setState({die1: newDie1, die2: newDie2, isRolling: true}) //During roll, change state to isRolling
    
        //wait one second, and then set rolling to false
        setTimeout(() => {
            this.setState({isRolling: false});
        }, 1500);
    }

    render (){
        const { die1, die2, isRolling } = this.state;
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={die1} isRolling={isRolling}/>
                    <Die face={die2} isRolling={isRolling}/>
                </div>
                <button onClick={this.roll} disabled={isRolling}>
                    {isRolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RollDice;

//Are the dice rolling? If true, change text to rolling - If false, Roll Dice
// {this.state.isRolling ? "Rolling..." : "Roll Dice!"}


//Disable the button during the roll if isRolling is true
// disabled={this.state.isRolling}