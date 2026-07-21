import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentApi } from '../api/studentApi';
import StudentForm from '../components/StudentForm';
import toast from 'react-hot-toast';

const AddStudent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await studentApi.createStudent(data);
      if (response.success) {
        toast.success('Student created successfully!');
        navigate('/students');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create student');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Student</h1>
          <StudentForm onSubmit={handleSubmit} isLoading={loading} />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;