import React, { useState, useEffect } from 'react';
import { studentApi } from '../api/studentApi';
import StudentTable from '../components/StudentTable';
import DeleteModal from '../components/DeleteModal';
import { Search, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: null,
    name: '',
  });
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, [pagination.page, search]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await studentApi.getStudents({
        page: pagination.page,
        limit: pagination.limit,
        search: search,
      });
      if (response.success) {
        setStudents(response.data);
        setPagination((prev) => ({
          ...prev,
          total: response.pagination.total,
          totalPages: response.pagination.totalPages,
        }));
      }
    } catch (error) {
      toast.error('Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id, name) => {
    setDeleteModal({ isOpen: true, id, name });
  };

  const confirmDelete = async () => {
    try {
      setDeleting(true);
      const response = await studentApi.deleteStudent(deleteModal.id);
      if (response.success) {
        toast.success('Student deleted successfully');
        fetchStudents();
      }
    } catch (error) {
      toast.error('Failed to delete student');
    } finally {
      setDeleting(false);
      setDeleteModal({ isOpen: false, id: null, name: '' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPagination((prev) => ({ ...prev, page: 1 }));
    fetchStudents();
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Students</h1>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search students..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-48 md:w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>
            <button
              onClick={fetchStudents}
              className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <StudentTable students={students} onDelete={handleDelete} />

            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center mt-6 space-x-2">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-gray-700">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <DeleteModal
        isOpen={deleteModal.isOpen}
        studentName={deleteModal.name}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal({ isOpen: false, id: null, name: '' })}
        isLoading={deleting}
      />
    </div>
  );
};

export default Students;