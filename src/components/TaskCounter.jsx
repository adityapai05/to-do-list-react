import React, { useState } from "react";

function TaskCounter() {
  const activeTasks = todos.filter((todo) => !todo.completed).length;

  if (todos.length === 0) return null;

  return (
    <div className="mt-4 text-sm text-gray-500">
      {activeTasks} active task{activeTasks !== 1 ? "s" : ""} remaining
    </div>
  );
}

const App = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Task Manager
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

            <TaskCounter todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCounter;
