import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { actionIncrement } from '../src/_actions/counter'


 class Counter extends Component {
  render() {
    console.log(this.props.counter.number)   
  return (

    <div className="App">
      <header className="App-header">
        <h1>{this.props.counter.number}</h1>
        <button onClick={() => this.props.dispatch(actionIncrement())}>INC</button>
      </header>
    </div>
  );
 }
}

const mapStateToProps = (state) => {
    return  {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter)
;

// export default method(mapStateToProps)/connect(mapStateToProps)(class name)
