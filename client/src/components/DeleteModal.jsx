import React from 'react';
import { X } from 'lucide-react';

const DeleteModal = ({ isOpen, studentName, onConfirm, onCancel, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Delete Student</h3>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition"
            disabled={isLoading}
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <span className="font-semibold">{studentName}</span>?
          This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:bg-red-400"
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;