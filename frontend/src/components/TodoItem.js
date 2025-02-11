const TodoItem = ({ todo, onEdit, onDelete }) => {
    return (
        <div className="card p-3 shadow-sm mb-3">
            <h5>{todo.title}</h5>
            <p>{todo.description}</p>
            <p><strong>Start:</strong> {new Date(todo.startDate).toDateString()}</p>
            <p><strong>End:</strong> {new Date(todo.endDate).toDateString()}</p>
            <p><strong>Duration:</strong> {todo.duration}</p>
            <button className="btn btn-warning me-2" onClick={() => onEdit(todo)}>Edit</button>
            <button className="btn btn-danger" onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
    );
};

export default TodoItem;


