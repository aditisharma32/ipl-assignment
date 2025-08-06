
# 🏏 IPL Live Score Dashboard

A simple MERN (MongoDB, Express, React, Node.js) app to display live IPL match scores.


## 📦 Features

- Display live and completed match scores
- Shows team scores, overs, wickets
- Insert mock match data via script
- REST API built with Express and MongoDB

---

## 🖼️ Frontend (React)

- Built with `create-react-app`
- Fetches data from backend
- Displays matches using a simple card UI
- Automatically updates status (Live/Completed)


---

## 🛠️ Backend (Node + Express + MongoDB)

- REST API to fetch match data: `GET /api/matches`
- MongoDB stores all match info
- Dummy data script: `insertdata.js`



---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/aditisharma32/ipl-dashboard.git
cd ipl-dashboard
```

### 2. Prerequisite
- **Node.js** Installed
- **MongoDB** Installed and running locally

### 3. Insert dummy match data in MongoDB
Ensure MongoDB is running. Then run:
```bash
node insertdata.js
```
**insertdata.js** populates the MongoDB ipl-dashboard database with matches.

### 4. Start backend server
```bash
cd backend
npm install
node server.js
```
Backend will start on: ```http://localhost:5000```

### 5. Start frontend 
```bash
cd frontend
npm install
npm start
```
Frontend will start on: ```http://localhost:3000```