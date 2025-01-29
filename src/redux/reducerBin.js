import { ADD_TO_DO, REMOVE_TO_DO ,REMOVE_FOREVER,RESTORE} from './actionTypes';
const initalState = {
    taskBin:[],
};
function creatNewArr(taskBin_f,id) {
    const newArr = taskBin_f.filter(task => { return task.taskId!== id });
    console.log(id);
    console.log(newArr);
    return newArr
}


export const reducerBin = (state = initalState, action) => {
    switch (action.type) {
        case REMOVE_TO_DO:
            return { ...state, taskBin: [...state.taskBin, action.payload] }
        case REMOVE_FOREVER:
            return { ...state, taskBin: creatNewArr(state.taskBin,action.payload.taskId) } 
        case RESTORE:
            return { ...state, taskBin: creatNewArr(state.taskBin,action.payload.taskId) } 
        default:
            return state;
    } 
};
