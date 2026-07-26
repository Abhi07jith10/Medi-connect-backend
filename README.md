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

## Day 7 – Prescription APIs

### Completed

- Built Prescription APIs:
  - `POST /api/prescriptions` – Doctor sends a prescription.
  - `GET /api/prescriptions/:patientId` – Fetch patient prescriptions.
  - `PUT /api/prescriptions/:id/status` – Pharmacist updates prescription status.

- Linked the prescription workflow between **Doctor, Patient, and Pharmacist**.
- Verified that prescription data is stored and retrieved correctly from MongoDB.

## Challenges Faced & Fixes

### 1. User Profile Information Missing
**Issue:** Newly registered patients have no age or medical condition displayed.

**Cause:** Patient records are auto-created with placeholder values (`age: 0`, `condition: ""`).

**Solution:** Implement a **Profile Setup** page after registration so users can complete their personal and medical details.

---

### 2. Upcoming Appointment Not Displayed
**Issue:** After a doctor accepts an appointment, it is still not shown in the Patient Dashboard under **Upcoming Appointments**.

**Cause:** Appointment status is updated in the `appointments` collection, while the Patient Dashboard only fetches data from the `patients` collection.

**Solution:** Update the Patient Dashboard to also fetch appointment data from the `appointments` collection.

---

### 3. Patient Details Missing in Doctor Dashboard
**Issue:** Patient age and medical condition are not displayed in the Doctor Dashboard.

**Cause:** Patient records contain placeholder values created during registration.

**Solution:** Display the updated profile information after the patient completes the Profile Setup.

---

### 4. Role-Based Login Validation
**Issue:** Users can enter credentials on the wrong login portal (Patient, Doctor, or Pharmacist) and still authenticate.

**Solution:** Implement strict role validation and display an error message if the selected login portal does not match the user's role.

---

### 5. Session Persistence
**Issue:** Refreshing the browser redirects users back to the login page.

**Solution:** Persist JWT authentication using localStorage/cookies and restore the user's session until they log out.

---

### 6. Real User Authentication
**Clarification:** The application should work entirely through the UI, allowing real users to register, log in, and use the system without requiring manual Postman API requests. Postman should only be used for backend API testing during development.
