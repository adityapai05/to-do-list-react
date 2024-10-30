import React from 'react';

function InputContainer({ inputVal, handleInput, addTodo }) {
  return (
    <form onSubmit={addTodo} className="flex gap-2 mb-6">
      <input
        type="text"
        value={inputVal}
        onChange={handleInput}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-orange-500 text-white rounded-3xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-xl"
      >
        +
      </button>
    </form>
  );
}

export default InputContainer;