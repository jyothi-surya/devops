import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const getTodos = async () => axios.get(API_URL);
export const addTodo = async (todo) => axios.post(API_URL, todo);
export const updateTodo = async (id, updatedTodo) => axios.put(`${API_URL}/${id}`, updatedTodo); // ✅ Edit
export const deleteTodo = async (id) => axios.delete(`${API_URL}/${id}`);
