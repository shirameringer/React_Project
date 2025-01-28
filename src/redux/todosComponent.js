import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/action';
import { useState } from 'react';

const Todos = () => {
    const Tasks = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [id, setId] = useState();
    function toAddTask() {


        
            dispatch(add({ Name: name, Id: id }));
            // document.getElementById("name").value = "";
            // document.getElementById("id").value = "";
       

    }

    return (
        <>
            <h1>My Tasks</h1>
            {Tasks.map((task) =>(
                <div key={task.id}>
                    <span>taskId: {task.id} , taskName: {task.name}</span>
                    <button onClick={() => dispatch(remove(task.id))}>Remove</button>
                </div>

            ))}

            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" name="id" onChange={(e) => setId(e.target.value)} />
            <button onClick={toAddTask()}>AddTask</button>
        </>
    );
};
export default Todos;