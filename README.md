BlogSphere – MERN Stack Blog Website

BlogSphere is a full-stack blog platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to explore posts by category, view dynamic images, and perform authenticated operations. The project demonstrates robust RESTful API design, modern frontend development, and responsive UI principles.

Tech Stack

- Frontend:React.js, Tailwind CSS
- Backend:Node.js, Express.js
- Database:MongoDB
- Authentication:JSON Web Tokens (JWT)
- Other Tools:Mongoose, Axios

Features

- Category-wise blog post browsing
- Admin-based content seeding
- User authentication and protected routes
- Dynamic image rendering for blog content
- Responsive UI for all screen sizes
- Clean RESTful API architecture

Folder Structure

/client → React frontend
/server → Node.js backend
/models → Mongoose schemas
/routes → API route handlers


Getting Started

Prerequisites

- Node.js and npm installed
- MongoDB running locally or use MongoDB Atlas

Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blogsphere.git
   cd blogsphere
2.Install backend dependencies:
  cd server
  npm install
3.Connect to MongoDB:
  Create a .env file inside /server:
  MONGO_URI=your_mongo_connection_string
  JWT_SECRET=your_jwt_secret
4.Start the backend server:
  npm start
5.Install frontend dependencies and run React app:
  cd ../client
  npm install
  npm start





   

