import React from 'react';
import Counter from './Counter';
import './CounterGroup.css'

class CounterGroup extends React.Component {

     constructor(props) {
        super(props);
        this.state = { 
            counter: this.props.defaultCount,
            inputValue: this.props.defaultCount,
            sum: 0
        };
    }

    counterUpdateCallback = changeNum => {
        this.setState({sum: this.state.sum + changeNum});
    }

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    regenerateCounters = () => {
        this.setState({counter: this.state.inputValue});
    }

    renderCounters = () => {
        let counters= [];
        for(let count =0; count < this.state.counter; count++){
            counters.push(
            <Counter
                key= {count}
                onCounterValueChange= {this.counterUpdateCallback}
            />);
        }
        return counters;
    }

    render() {
        const counters= this.renderCounters();
        console.log(this.state.counter);

        return (
            <div className="counter-group">
                <div className= "regenerate">
                <input className="counter-groupinput" type="text" value={this.state.inputValue} 
                onChange={this.handleInputChange} ></input>
                <button className="counter-groupbutton" onClick= {this.regenerateCounters}>Regenerate Counters</button>
                <span className= "regeneratespan">Sum: {this.state.sum}</span>
                </div>
                <div>
                {counters}
                </div>
            </div>
        );
        
    }



};


export default CounterGroup;