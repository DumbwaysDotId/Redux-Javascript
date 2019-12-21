import { createStore ,combineReducers, applyMiddleware } from "redux";
import { logger } from './middleware';

import counter from '../_reducers/counter';


const reducers = combineReducers({
    counter
})

const store = createStore(reducers,
              applyMiddleware(logger));

export default store