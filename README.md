# 🎓 Student Management System (MERN Stack)

A full-stack **Student Management System** built using the **MERN Stack**.  
This application helps manage student records with complete **CRUD operations** using React, Node.js, Express.js, and MongoDB.

---

## ✨ Features

- ➕ Add new students
- 📋 View all student records
- ✏️ Update student details
- 🗑️ Delete student records
- 🔍 Search and manage student information
- 🛡️ Input validation and error handling

---

## 🛠️ Technologies Used

**Frontend**
- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔗 Axios

**Backend**
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 📦 Mongoose

**Tools**
- 🧪 Postman
- 🔧 Git & GitHub
- 💻 VS Code

---

## 📂 Project Structure


Student-management-system
│
├── client                  # React Frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── api
│
├── server                  # Node.js Backend
│   ├── src
│   │   ├── controllers
│   │   ├── services
│   │   ├── repositories
│   │   ├── models
│   │   └── routes
│   │
│   └── server.js
│
└── postman                 # API Collection


⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/Piyula/student-management-system.git

cd student-management-system
🖥️ Backend Setup
cd server

npm install

Create .env file:

PORT=5001
MONGO_URI=your_mongodb_connection_string

Start backend:

npm run dev

Backend runs on:

http://localhost:5001
🌐 Frontend Setup

Open a new terminal:

cd client

npm install

npm run dev

Frontend runs on:

http://localhost:5173
🔄 Application Flow
React Frontend
       |
       ↓
Axios API Requests
       |
       ↓
Express.js Server
       |
       ↓
Controller Layer
       |
       ↓
Service Layer
       |
       ↓
Repository Layer
       |
       ↓
MongoDB Database
📌 API Endpoints
Method	Endpoint	Description
POST	/api/students	Create student
GET	/api/students	Get all students
GET	/api/students/:id	Get student by ID
PUT	/api/students/:id	Update student
DELETE	/api/students/:id	Delete student
🧪 API Testing

API endpoints are tested using:

🧪 Postman

