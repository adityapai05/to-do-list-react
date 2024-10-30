import React from 'react';
import Todo from './Todo';

function TodoContainer({ todos, deleteTodo, toggleTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoContainer;