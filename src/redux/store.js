import {createStore} from 'redux';
import {manegerTask} from './reducer';
export const store=createStore(manegerTask);
export default store;