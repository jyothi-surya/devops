import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);

    useEffect(() => {
        axios.get("/api/todos").then(({ data }) => setTodos(data));
    }, []);

    const addOrUpdateTodo = async (todo) => {
        if (editingTodo) {
            await axios.put(`/api/todos/${editingTodo._id}`, todo);
        } else {
            await axios.post("/api/todos", todo);
        }
        setEditingTodo(null);
    };

    const deleteTodo = async (id) => {
        await axios.delete(`/api/todos/${id}`);
    };

    return (
        <div className="container mt-5">
            <TodoForm onSubmit={addOrUpdateTodo} existingTodo={editingTodo} />
            {todos.map(todo => <TodoItem key={todo._id} todo={todo} onEdit={setEditingTodo} onDelete={deleteTodo} />)}
        </div>
    );
};

export default Home;


