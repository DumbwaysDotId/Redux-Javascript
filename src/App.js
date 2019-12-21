import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from "redux";


//setup actio
const actionINC = () => {
  return {
    type: 'INCREMENT ',
    payload: null
  }
}

//setup reducer
const initialState = {
  number: 0
}

function counter(state = initialState, action){
  switch(action.type) {
    case 'INCREMENT':
      return {
        number: state.number + 1
      }
    case 'DECREMENT' :
      return {
        number: state.number - 1
      }
      default:
        return state
  }
}

//initial store
let store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState().number)
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <button onClick ={() => store.dispatch(actionINC())}>INC</button>
      </header>
    </div>
  );
}

export default App;
