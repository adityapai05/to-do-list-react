import React, { useState } from "react";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/ToDoContainer";
import Alert from "./components/Alert";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (inputVal.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: inputVal.trim(),
          completed: false,
          createdAt: new Date(),
        },
      ]);
      setInputVal("");
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const activeTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-2xl mx-auto mt-12 px-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">
                To-Do List
              </h1>

              {showAlert && (
                <Alert
                  message="Please enter a task before adding"
                  onClose={() => setShowAlert(false)}
                />
              )}

              <InputContainer
                inputVal={inputVal}
                handleInput={handleInput}
                addTodo={addTodo}
              />

              <TodoContainer
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />

              {todos.length > 0 && (
                <div className="mt-6 text-lg text-gray-500">
                  {activeTasks} active task{activeTasks !== 1 ? "s" : ""}{" "}
                  remaining
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
