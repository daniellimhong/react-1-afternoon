import React, { Component } from 'react';

class EvenAndOdd extends Component {
        constructor(props) {
            super(props);

            this.state = {
                evenArray: [],
                oddArray: [],
                userInput: ""
            }
        }
        
        handleChange(value){
            this.setState({
                userInput: value
            })
        }

        assignEvenAndOdds(userInput) {
            let arr = userInput.split(',');
            let evens = [];
            let odds = [];

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 1){
                    odds.push( parseInt(arr[i], 10) );
                } else {
                    evens.push( parseInt (arr[i], 10) );
                }
            }
            this.setState({
                evenArray: evens,
                oddArray: odds
            })
        }

        render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }></input> 
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput)} }> Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span> 
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}

export default EvenAndOdd;
