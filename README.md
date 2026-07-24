## Project Status

### Frontend
- ✅ React + Vite setup
- ✅ Authentication UI
- ✅ Dashboard UI

### Backend
## Backend Progress
  Day 1 ,2
- Node.js and Express backend initialized
- MongoDB Atlas database created
- Database successfully connected using Mongoose
- Environment variables configured using dotenv
- 
Day 3
- Installed bcryptjs and jsonwebtoken
- Created User, Patient and Appointment models
- Built Register API — saves encrypted password to MongoDB
- Built Login API — verifies password and returns JWT token
- Tested both APIs in Postman successfully

## 🚀 Latest Progress (Day 4)

### ✅ Completed
- Added JWT Authentication Middleware to protect routes.
- Created Doctor and Patient controllers & routes.
- Connected all routes to the Express server.
- Tested Doctor and Patient APIs successfully using Postman.

### 📌 API Status

| Method | Endpoint | Status |
|--------|----------|--------|
| POST | `/api/auth/register` | ✅ Working |
| POST | `/api/auth/login` | ✅ Working |
| GET | `/api/doctors` | ✅ Working |
| POST | `/api/patients` | ✅ Working |
| GET | `/api/patients` | ✅ Ready |
| PUT | `/api/patients/:id` | ✅ Ready |
