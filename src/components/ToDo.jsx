import React from 'react';


function Todo({ todo, onDelete, onToggle }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-md transition-all ${
        todo.completed ? 'bg-gray-50' : 'bg-white'
      } border border-gray-200 hover:shadow-md`}
    >
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={onToggle}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && <span className="text-white text-sm">✓</span>}
        </button>
        <span
          className={`flex-1 ${
            todo.completed
              ? 'text-gray-500 line-through'
              : 'text-gray-900'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
      >
        ⨯
      </button>
    </div>
  );
}

export default Todo;