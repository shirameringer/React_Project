import { ADD_TO_DO, REMOVE_TO_DO,REMOVE_FOREVER ,RESTORE} from './actionTypes';
export const add = (task) => ({
    type: ADD_TO_DO,
    payload: task
});
export const remove = (task) => ({
    type: REMOVE_TO_DO,
    payload: task
});
export const remove_forever = (task) => ({
    type: REMOVE_FOREVER,
    payload: task
});
export const restore = (task) => ({
    type: RESTORE,
    payload: task
});