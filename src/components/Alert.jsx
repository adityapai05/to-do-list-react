import React from "react";

function Alert({ message, onClose }) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative mb-4">
      <span>{message}</span>
      <button
        onClick={onClose}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-red-600 hover:text-red-800"
      >
        ×
      </button>
    </div>
  );
}

export default Alert;