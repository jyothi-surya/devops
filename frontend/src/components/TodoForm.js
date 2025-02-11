import { useState } from "react";

const TodoForm = ({ onSubmit, existingTodo }) => {
    const [title, setTitle] = useState(existingTodo?.title || "");
    const [description, setDescription] = useState(existingTodo?.description || "");
    const [startDate, setStartDate] = useState(existingTodo?.startDate || "");
    const [endDate, setEndDate] = useState(existingTodo?.endDate || "");
    const [duration, setDuration] = useState(existingTodo?.duration || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, startDate, endDate, duration });
    };

    return (
        <div className="container p-4 border rounded bg-light">
            <h4>{existingTodo ? "Edit Todo" : "Add New Todo"}</h4>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="date" className="form-control mb-2" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                <input type="date" className="form-control mb-2" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                <input className="form-control mb-2" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                <button type="submit" className="btn btn-primary w-100">{existingTodo ? "Update Todo" : "Add Todo"}</button>
            </form>
        </div>
    );
};

export default TodoForm;


