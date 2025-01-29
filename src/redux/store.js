import {createStore,applyMiddleware,combineReducers} from 'redux';
import validatorMiddleware from './middleWeres/validatorMiddleware';
import {manegerTask} from './reducer';
import {reducerBin} from './reducerBin';
const rootReducer=combineReducers({
    todos:manegerTask,
    taskBin:reducerBin,
})
export const store=createStore(rootReducer,applyMiddleware(validatorMiddleware));
export default store;