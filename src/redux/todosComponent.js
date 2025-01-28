import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/action';
import { useState } from 'react';

const Todos = () => {
    const Tasks = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    function toAddTask() {
        if(name&&id){
            dispatch(add({ taskName: name, taskId: id }));
        }
       
            // document.getElementById("name").value = "";
            // document.getElementById("id").value = "";
       

    }

    return (
        <div className="container mt-5">
        <h1 className="text-center text-danger mb-4">My Tasks</h1>
        
        {/* Task Input Area */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control mb-3 border border-success"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3 border border-success"
            placeholder="Task ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="btn btn-success w-100" onClick={toAddTask}>
            Add Task
          </button>
        </div>
  
        {/* Task List */}
        <div>
          {Tasks.length === 0 ? (
            <p className="text-muted text-center">No tasks added yet.</p>
          ) : (
            Tasks.map((task) => (
              <div
                key={task.taskId}
                className="d-flex justify-content-between align-items-center bg-light p-3 mb-3 border border-danger rounded shadow-sm"
              >
                <span>
                  <strong>Task ID:</strong> {task.taskId} |{" "}
                  <strong>Task Name:</strong> {task.taskName}
                </span>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(remove(task.taskId))}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
};
export default Todos;