import { createStore ,combineReducers, applyMiddleware } from "redux";
import { logger } from './middleware';

import counter from '../_reducers/counter';
import users from '../_reducers/users';


const reducers = combineReducers({
    counter,
    users
})

const store = createStore(reducers,
              applyMiddleware(logger));

export default store