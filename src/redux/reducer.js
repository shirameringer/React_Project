import { ADD_TO_DO, REMOVE_TO_DO } from './actionTypes';
const initalState = {
    todos:[],
};
function creatNewArr(todos_f,id) {
    const newArr = todos_f.filter(task => { return task.taskId!== id });
    console.log(id);
    console.log(newArr);
    return newArr
}
export const manegerTask = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return { ...state, todos: [...state.todos, action.payload] }
        case REMOVE_TO_DO:
            return { ...state, todos: creatNewArr(state.todos,action.payload) }
        default:
            return state;
    } 
};
