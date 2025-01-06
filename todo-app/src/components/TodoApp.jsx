import React, { useEffect, useState } from "react";
import "../TodoApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ModalTodo = ({ todo, onClose, onSave }) => {
  const [title, setTitle] = useState(todo.title);
  const [priority, setPriority] = useState(todo.priority);
  const [status, setStatus] = useState(todo.status);

  const handleSave = () => {
    onSave({ ...todo, title, priority, status });
    onClose();
  };

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Todo</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                type="text"
                className="form-control mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <select
                className="form-select mb-3"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <select
                className="form-select mb-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-danger" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const toggleSelectTodo = (id) => {
    setSelectedTodos((prev) =>
      prev.includes(id) ? prev.filter((todoId) => todoId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <span>{todo.title}</span>
            <div className="float-end">
              <button
                className={`btn btn-${selectedTodos.includes(todo.id) ? "success" : "primary"} me-2`}
                onClick={() => toggleSelectTodo(todo.id)}
              >
                <FontAwesomeIcon icon={selectedTodos.includes(todo.id) ? faCheck : faPlus} />
              </button>
              <button className="btn btn-danger me-2" onClick={() => onDeleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setEditTodo(todo)}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editTodo && (
        <ModalTodo
          todo={editTodo}
          onClose={() => setEditTodo(null)}
          onSave={onUpdateTodo}
        />
      )}
    </>
  );
};

const FormTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("pending");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = {
        title,
        priority,
        status,
        completed: false,
      }
      onAddTodo(newTodo);
      setTitle("");
      setPriority("low");
      setStatus("pending");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter your todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="form-select mb-3"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select
        className="form-select mb-3"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="inprogress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" className="btn btn-primary float-end">
        <FontAwesomeIcon icon={faPlus} /> Add
      </button>
    </form>
  );
};

const TabNavigation = ({ activeTab, onTabClick }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'pending' ? 'active' : ''}`}
          href="#"
          onClick={() => onTabClick('pending')}
        >
          Pending
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'inprogress' ? 'active' : ''}`}
          href="#"
          onClick={() => onTabClick('inprogress')}
        >
          In Progress
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
          href="#"
          onClick={() => onTabClick('completed')}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('pending');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/todos");
        const data = await response.json();
        setTodos(data.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const response = await fetch("http://localhost:8000/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      if (response.ok) {
        const data = await response.json();
        setTodos((prev) => [...prev, data.data]);
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (updatedTodo) => {
    try {
      const response = await fetch(`http://localhost:8000/api/todos/${updatedTodo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? data.data : todo)));
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/todos/${todoId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const filteredTodos = todos.filter(todo => todo.status === activeTab);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 mb-3">
          <div className="card shadow-sm">
            <div className="card-header bg-white fs-5">Todo List</div>
            <div className="card-body">
              <TabNavigation activeTab={activeTab} onTabClick={setActiveTab} />
              {filteredTodos.length === 0 ? (
                <div className="alert alert-info" role="alert">
                  Data belum ada.
                </div>
              ) : (
                <TodoList todos={filteredTodos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} />
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white fs-5">Add Todo</div>
            <div className="card-body">
              <FormTodo onAddTodo={addTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
