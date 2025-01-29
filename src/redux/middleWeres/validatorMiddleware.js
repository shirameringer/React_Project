const validatorMiddleware=store=>next=>action=>{
    if(action.payload.taskName&&action.payload.taskId){
        next(action);
    }
    else{
        console.log("empty");
        return;
    }
    // console.log(action);
    // console.log(store);
    // next(action);
}
export default validatorMiddleware;
