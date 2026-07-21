import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { studentApi } from '../api/studentApi';
import { Users, UserPlus, BookOpen, BarChart3 } from 'lucide-react';

const Home = () => {
  const [stats, setStats] = useState({ total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await studentApi.getStats();
      if (response.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: 'Total Students',
      value: stats.total,
      icon: <Users className="w-8 h-8 text-teal-600" />,
      bg: 'bg-teal-50',
      link: '/students',
    },
    {
      title: 'Add Student',
      value: 'New',
      icon: <UserPlus className="w-8 h-8 text-green-600" />,
      bg: 'bg-green-50',
      link: '/add-student',
    },
    {
      title: 'Departments',
      value: '8',
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      bg: 'bg-purple-50',
      link: '/students',
    },
    {
      title: 'Overview',
      value: 'Active',
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      bg: 'bg-orange-50',
      link: '/students',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome to Student Management System</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className={`${card.bg} rounded-xl p-6 shadow-sm hover:shadow-md transition`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">{card.title}</p>
                  {loading && card.title === 'Total Students' ? (
                    <div className="h-8 w-12 bg-gray-200 animate-pulse rounded mt-1"></div>
                  ) : (
                    <p className="text-2xl font-bold text-gray-800 mt-1">{card.value}</p>
                  )}
                </div>
                {card.icon}
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/add-student"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              + Add New Student
            </Link>
            <Link
              to="/students"
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              View All Students
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;