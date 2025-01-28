import { ADD_TO_DO, REMOVE_TO_DO } from './actionTypes';
const initalState = {
    todos:[],
};
function creatNewArr(id) {
    const newArr = initalState.todos.filter(task => { return task.id != id });
    return newArr;
}
export const manegerTask = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return { ...state, todos: [...state.todos, action.payload] }
        case REMOVE_TO_DO:
            return { ...state, todos: creatNewArr(action.payload) }
        default:
            return state;
    } 
};
