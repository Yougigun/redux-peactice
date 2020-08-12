import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
import * as actionType from '../../store/action/action'
class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onChangeAmount(1)} />
                <CounterControl label="Decrement" clicked={this.props.onChangeAmount(-1)}  />
                <CounterControl label="Add 5" clicked={this.props.onChangeAmount(5)}  />
                <CounterControl label="Subtract 5" clicked={this.props.onChangeAmount(-5)}  />
                <hr/>
                <button onClick={this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.results.map((result,index)=><li 
                                                        key={index} 
                                                        onClick={this.props.onDeleteResult(index)}
                                                        >{result}
                                                        </li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        counter : state.ctr.counter,
        results : state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeAmount: (value) =>()=> dispatch(actionType.change_amount(value)),
        onStoreResult: (counter) => ()=> dispatch(actionType.storeResult(counter)),
        onDeleteResult: (index) => ()=>dispatch(dispatch => 
                                                {setTimeout(()=>
                                                    dispatch(actionType.delete_result(index)),2000)
                                                }),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);