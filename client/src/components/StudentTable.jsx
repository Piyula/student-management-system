import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Edit, Trash2 } from 'lucide-react';

const StudentTable = ({ students, onDelete }) => {
  if (!students || students.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No students found. Add your first student!
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Student ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Year
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student._id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {student.studentId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {student.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {student.department}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                Year {student.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {student.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <div className="flex justify-center space-x-2">
                  <Link
                    to={`/students/${student._id}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Eye size={18} />
                  </Link>
                  <Link
                    to={`/edit-student/${student._id}`}
                    className="text-yellow-600 hover:text-yellow-900"
                  >
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => onDelete(student._id, student.name)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;