import { useSelector, useDispatch } from 'react-redux';
import { add, remove,remove_forever ,restore} from '../redux/action';
const TaksBin = () => {
    const listTaskBin = useSelector((state) => state.taskBin.taskBin);
    const dispatch = useDispatch();
    return (
        <div>
            {listTaskBin.length === 0 ? (
                <p className="text-muted text-center">No tasks added yet.</p>
            ) : (
                listTaskBin.map((task) => (
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
                            onClick={() => dispatch(remove_forever(task))}
                        >
                            Remove Forever
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => dispatch(restore(task))}
                        >
                            RESTORE
                        </button>
                    </div>
                ))
            )}
        </div>

    );

}
export default TaksBin;