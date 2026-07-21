const studentService = require('../services/studentService');

class StudentController {
  // Create student
  async createStudent(req, res) {
    try {
      const student = await studentService.createStudent(req.body);
      res.status(201).json({
        success: true,
        message: 'Student created successfully',
        data: student,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get all students
  async getAllStudents(req, res) {
    try {
      const { page, limit, search, sort, order } = req.query;
      const result = await studentService.getAllStudents({
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        search: search || '',
        sort: sort || 'createdAt',
        order: order || 'desc',
      });

      res.status(200).json({
        success: true,
        data: result.students,
        pagination: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          totalPages: result.totalPages,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get student by ID
  async getStudentById(req, res) {
    try {
      const student = await studentService.getStudentById(req.params.id);
      res.status(200).json({
        success: true,
        data: student,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Update student
  async updateStudent(req, res) {
    try {
      const student = await studentService.updateStudent(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Student updated successfully',
        data: student,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Delete student
  async deleteStudent(req, res) {
    try {
      await studentService.deleteStudent(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Student deleted successfully',
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get stats
  async getStats(req, res) {
    try {
      const stats = await studentService.getStats();
      res.status(200).json({
        success: true,
        data: stats,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new StudentController();