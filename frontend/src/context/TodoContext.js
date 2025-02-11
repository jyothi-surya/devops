import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = (title) => {
    axios.post("http://localhost:5000/api/todos", { title }).then((res) => {
      setTodos([...todos, res.data]);
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
