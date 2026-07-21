import axios from 'axios';

const API_URL = 'http://localhost:5001/api';


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Student API calls
export const studentApi = {
  // Create student
  createStudent: async (data) => {
    const response = await api.post('/students', data);
    return response.data;
  },

  // Get all students with filters
  getStudents: async (params = {}) => {
    const response = await api.get('/students', { params });
    return response.data;
  },

  // Get student by ID
  getStudent: async (id) => {
    const response = await api.get(`/students/${id}`);
    return response.data;
  },

  // Update student
  updateStudent: async (id, data) => {
    const response = await api.put(`/students/${id}`, data);
    return response.data;
  },

  // Delete student
  deleteStudent: async (id) => {
    const response = await api.delete(`/students/${id}`);
    return response.data;
  },

  // Get stats
  getStats: async () => {
    const response = await api.get('/stats');
    return response.data;
  },
};