import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { studentApi } from '../api/studentApi';
import { ArrowLeft, Edit } from 'lucide-react';
import toast from 'react-hot-toast';

const ViewStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const fetchStudent = async () => {
    try {
      setLoading(true);
      const response = await studentApi.getStudent(id);
      if (response.success) {
        setStudent(response.data);
      }
    } catch (error) {
      toast.error('Student not found');
      navigate('/students');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!student) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/students')}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">Student Details</h1>
            </div>
            <Link
              to={`/edit-student/${student._id}`}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Student ID</label>
                <p className="text-lg font-semibold text-gray-800">{student.studentId}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Full Name</label>
                <p className="text-lg font-semibold text-gray-800">{student.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-lg font-semibold text-gray-800">{student.email}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Department</label>
                <p className="text-lg font-semibold text-gray-800">
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                    {student.department}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Year</label>
                <p className="text-lg font-semibold text-gray-800">Year {student.year}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Phone</label>
                <p className="text-lg font-semibold text-gray-800">{student.phone}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Created: {new Date(student.createdAt).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: {new Date(student.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;