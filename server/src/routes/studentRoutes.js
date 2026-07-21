const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Student routes
router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);
router.get('/stats', studentController.getStats);

module.exports = router;