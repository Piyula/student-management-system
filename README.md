# 🎓 Student Management System (MERN Stack)

A full-stack **Student Management System** built using the **MERN Stack**.  
This application allows users to efficiently manage student records with complete **CRUD (Create, Read, Update, Delete) operations** using React, Node.js, Express.js, and MongoDB.

---

## ✨ Features

- ➕ Add new student records
- 📋 View all students
- ✏️ Update student information
- 🗑️ Delete student records
- 🔍 Search and manage student details
- 🛡️ Input validation and error handling

---

## 🛠️ Technologies Used

### 🌐 Frontend
- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔗 Axios

### ⚙️ Backend
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 📦 Mongoose

### 🔧 Tools
- 🧪 Postman
- 🐙 Git & GitHub
- 💻 Visual Studio Code

---

## 📂 Project Structure

```text
Student-management-system
│
├── client                    # React Frontend
│   │
│   ├── src
│   ├── components
│   ├── pages
│   └── api
│
├── server                    # Node.js Backend
│   │
│   ├── src
│   │   ├── controllers
│   │   ├── services
│   │   ├── repositories
│   │   ├── models
│   │   └── routes
│   │
│   └── server.js
│
└── postman                   # API Collection
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Piyula/student-management-system.git

cd student-management-system
```

---

# 🖥️ Backend Setup

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5001
```

---

# 🌐 Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔄 Application Flow

```
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
```

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/students` | Create a student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get student by ID |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

---

# 🧪 API Testing

API endpoints are tested using:

🧪 **Postman**

---

## 👩‍💻 Author

**Piyula Arulpirabakar**

🎓 Computer Science Undergraduate  
💻 Software Engineering Intern  

🔗 GitHub:  
https://github.com/Piyula

---

⭐ If you find this project useful, consider giving it a star!
