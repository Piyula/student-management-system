# Student Management System

A full-stack web application for maintaining student records. It provides a React dashboard for creating, viewing, updating, searching, and deleting students, backed by an Express and MongoDB REST API.

## Features

- Create, view, edit, and delete student records
- Search students by name, student ID, email, or department
- Paginated student list
- Dashboard showing the total number of students
- Client- and server-side validation
- Unique student ID and email enforcement

## Tech stack

- **Frontend:** React 19, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express 5, Mongoose
- **Database:** MongoDB

## Project structure

```text
.
├── client/                 # React + Vite frontend
│   └── src/
│       ├── api/            # API client
│       ├── components/     # Reusable UI components
│       └── pages/          # Application pages
├── server/                 # Express API
│   └── src/
│       ├── controllers/    # HTTP request handlers
│       ├── models/         # Mongoose schemas
│       ├── repositories/   # Database access
│       ├── routes/         # API routes
│       └── services/       # Business logic
└── postman/                # Postman workspace settings
```

## Prerequisites

- Node.js 18 or later
- npm
- A MongoDB database (local or MongoDB Atlas)

## Getting started

1. Clone the repository and enter it:

   ```bash
   git clone <repository-url>
   cd Student-management-system
   ```

2. Install the server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Create `server/.env` and add your MongoDB connection string. Set the port to `5001`, which matches the frontend's configured API URL:

   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/student-management-system
   PORT=5001
   ```

4. Start the API:

   ```bash
   npm run dev
   ```

5. In a second terminal, install and start the frontend:

   ```bash
   cd client
   npm install
   npm run dev
   ```

6. Open the local URL shown by Vite (normally `http://localhost:5173`).

## Available scripts

| Location | Command | Description |
| --- | --- | --- |
| `client` | `npm run dev` | Start the Vite development server |
| `client` | `npm run build` | Build the production frontend |
| `client` | `npm run lint` | Lint frontend files with Oxlint |
| `client` | `npm run preview` | Preview the production build |
| `server` | `npm run dev` | Start the API with Nodemon |
| `server` | `npm start` | Start the API with Node.js |

## API reference

The API base URL is `http://localhost:5001/api` when using the configuration above.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/health` | Check API availability |
| `GET` | `/students` | List students; supports pagination, search, and sorting |
| `POST` | `/students` | Create a student |
| `GET` | `/students/:id` | Get one student by MongoDB ID |
| `PUT` | `/students/:id` | Update a student |
| `DELETE` | `/students/:id` | Delete a student |
| `GET` | `/stats` | Get the total student count |

### List students query parameters

| Parameter | Default | Description |
| --- | --- | --- |
| `page` | `1` | Page number |
| `limit` | `10` | Records per page |
| `search` | empty | Searches name, student ID, email, and department |
| `sort` | `createdAt` | Field used to sort results |
| `order` | `desc` | Sort order: `asc` or `desc` |

### Example student payload

```json
{
  "studentId": "STU-001",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "department": "CSE",
  "year": 2,
  "phone": "0712345678"
}
```

### Validation rules

- `studentId` and `email` must be unique.
- Names must contain 2–50 characters.
- `department` must be one of `CSE`, `ECE`, `EEE`, `MECH`, `CIVIL`, `IT`, `AI&DS`, or `OTHER`.
- `year` must be between 1 and 4.
- `phone` must contain exactly 10 digits.

## Configuration note

The frontend currently calls `http://localhost:5001/api` directly. If you run the API on a different port or host, update `client/src/api/studentApi.js` and the Vite proxy in `client/vite.config.js` to use the same address.
