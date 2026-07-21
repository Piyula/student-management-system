const studentRepository = require('../repositories/studentRepository');

class StudentService {
  // Create student
  async createStudent(studentData) {
    // Check if studentId already exists
    const existingStudent = await studentRepository.findByStudentId(studentData.studentId);
    if (existingStudent) {
      throw new Error('Student ID already exists');
    }

    // Check if email already exists
    const existingEmail = await studentRepository.findByEmail(studentData.email);
    if (existingEmail) {
      throw new Error('Email already exists');
    }

    return await studentRepository.create(studentData);
  }

  // Get all students with filters
  async getAllStudents(filters) {
    return await studentRepository.findAll(filters);
  }

  // Get student by ID
  async getStudentById(id) {
    const student = await studentRepository.findById(id);
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  }

  // Update student
  async updateStudent(id, updateData) {
    // Check if student exists
    const existingStudent = await studentRepository.findById(id);
    if (!existingStudent) {
      throw new Error('Student not found');
    }

    // If email is being updated, check if it's already taken by another student
    if (updateData.email) {
      const emailExists = await studentRepository.findByEmail(updateData.email);
      if (emailExists && emailExists._id.toString() !== id) {
        throw new Error('Email already exists');
      }
    }

    // If studentId is being updated, check if it's already taken
    if (updateData.studentId) {
      const studentIdExists = await studentRepository.findByStudentId(updateData.studentId);
      if (studentIdExists && studentIdExists._id.toString() !== id) {
        throw new Error('Student ID already exists');
      }
    }

    return await studentRepository.updateById(id, updateData);
  }

  // Delete student
  async deleteStudent(id) {
    const student = await studentRepository.findById(id);
    if (!student) {
      throw new Error('Student not found');
    }
    return await studentRepository.deleteById(id);
  }

  // Get student stats
  async getStats() {
    const total = await studentRepository.count();
    return { total };
  }
}

module.exports = new StudentService();