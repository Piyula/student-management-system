const Student = require('../models/Student');

class StudentRepository {
  // Create a new student
  async create(studentData) {
    try {
      const student = new Student(studentData);
      return await student.save();
    } catch (error) {
      throw error;
    }
  }

  // Get all students with pagination, search, sorting
  async findAll({ page = 1, limit = 10, search = '', sort = 'createdAt', order = 'desc' }) {
    try {
      const skip = (page - 1) * limit;
      const sortOrder = order === 'desc' ? -1 : 1;
      
      // Build search query
      let query = {};
      if (search) {
        query = {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { studentId: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { department: { $regex: search, $options: 'i' } },
          ],
        };
      }

      const students = await Student.find(query)
        .sort({ [sort]: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean();

      const total = await Student.countDocuments(query);

      return {
        students,
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      throw error;
    }
  }

  // Find student by ID
  async findById(id) {
    try {
      return await Student.findById(id).lean();
    } catch (error) {
      throw error;
    }
  }

  // Find student by studentId
  async findByStudentId(studentId) {
    try {
      return await Student.findOne({ studentId }).lean();
    } catch (error) {
      throw error;
    }
  }

  // Find student by email
  async findByEmail(email) {
    try {
      return await Student.findOne({ email }).lean();
    } catch (error) {
      throw error;
    }
  }

  // Update student
  async updateById(id, updateData) {
    try {
      return await Student.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      ).lean();
    } catch (error) {
      throw error;
    }
  }

  // Delete student
  async deleteById(id) {
    try {
      return await Student.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }

  // Count total students
  async count() {
    try {
      return await Student.countDocuments();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StudentRepository();