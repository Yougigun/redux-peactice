import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        console.log(this.props.ctr);
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() =>{this.props.onChangeAmount(1)}} />
                <CounterControl label="Decrement" clicked={() =>{this.props.onChangeAmount(-1)}}  />
                <CounterControl label="Add 5" clicked={() =>{this.props.onChangeAmount(5)}}  />
                <CounterControl label="Subtract 5" clicked={() =>{this.props.onChangeAmount(-5)}}  />
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr :state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeAmount:(value)=>dispatch({type:"onChangeAmount",value})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);