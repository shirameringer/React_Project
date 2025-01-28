import { ADD_TO_DO, REMOVE_TO_DO } from './actionTypes';
export const add = (task) => ({
    type: ADD_TO_DO,
    payload: task
});
export const remove = (id) => ({
    type: REMOVE_TO_DO,
    payload: id
});