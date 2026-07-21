const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use('/api', studentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Student management system app is running',
  });
});

// Error handling middleware (should be last)
app.use(errorHandler);

module.exports = app;