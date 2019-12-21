import { createStore ,combineReducers } from "redux";

import counter from '../_reducers/counter';


const reducers = combineReducers({
    counter
})

const store = createStore(reducers);

export default store