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

Day 4

- Added JWT Authentication Middleware to protect routes.
- Created Doctor and Patient controllers & routes.
- Connected all routes to the Express server.
- Tested Doctor and Patient APIs successfully using Postman.

### API Status

| Method | Endpoint | Status |
|--------|----------|--------|
| POST | `/api/auth/register` | ✅ Working |
| POST | `/api/auth/login` | ✅ Working |
| GET | `/api/doctors` | ✅ Working |
| POST | `/api/patients` | ✅ Working |
| GET | `/api/patients` | ✅ Ready |
| PUT | `/api/patients/:id` | ✅ Ready |

 Day 5 
 
 Completed Tasks
- [x] Created Appointment Controller and Routes
- [x] Created Prescription Model, Controller, and Routes
- [x] Connected all routes to server

## API Testing Results
- [x] Book Appointment API - Working
- [x] Accept Appointment API - Working
- [x] Send Prescription API - Working
- [x] Update Pharmacist Status API - Working


 Day 6 


- Installed Axios in the frontend
- Created API configuration file
- Connected Login to the real backend
- Connected Register to the real backend
- Connected Doctor Dashboard to real MongoDB data
- Connected Pharmacist Dashboard to real MongoDB data
- Connected Patient Dashboard to real MongoDB data
- User data persists on page refresh using Local Storage
