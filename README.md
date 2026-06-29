# 🏨 BookMyStay

> A modern full-stack accommodation booking web application built with Node.js, Express, MongoDB, and EJS.

BookMyStay allows users to discover, list, and manage rental properties with secure authentication, image uploads, and location support.

---

## 🚀 Live Demo

🔗 https://bookmystay-fual.onrender.com

---

## ✨ Features

- 🏠 Create, update, and delete property listings  
- 🔐 User authentication (Login / Register / Logout)  
- 🖼️ Image upload with Cloudinary integration  
- 💬 Flash messages for better UX feedback  
- 🗺️ Location support using Mapbox (if enabled)  
- 📱 Fully responsive UI (Mobile + Desktop)  
- 📦 MongoDB database integration  
- ☁️ Deployed on Render  

---

## 🛠️ Tech Stack

**Frontend:**
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- HTML5, CSS3

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB + Mongoose

**Authentication:**
- Express-session
- Passport.js

**Cloud Services:**
- Cloudinary (Image storage)
- Mapbox (Maps)

---
## 📁 Project Structure

bookmystay/
│
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── controllers/ # Business logic
├── views/ # EJS templates
├── public/ # Static files (CSS, JS)
├── utils/ # Error handling & helpers
├── cloudConfig/ # Cloudinary setup
├── app.js # Main server file
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/bookmystay.git
cd bookmystay

npm install

NODE_ENV=development
PORT=8080
MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret

SESSION_SECRET=your_session_secret
MAPBOX_TOKEN=your_mapbox_token

npm start

npm install

node app.js


---

👍


🏨 BookMyStay

BookMyStay is a full-stack hotel/room listing web application built using Node.js, Express.js, MongoDB, and EJS. Users can create, view, edit, and delete property listings with image uploads and map integration.

🚀 Features
🏠 Create, edit, and delete listings
🖼️ Image upload using Cloudinary
🗺️ Location display using Mapbox (optional)
🔐 User authentication & session management
💬 Flash messages for alerts
📦 MongoDB database integration
🎨 Responsive UI using Bootstrap & EJS templates
☁️ Deployed on Render
🛠️ Tech Stack
Backend: Node.js, Express.js
Frontend: EJS, Bootstrap
Database: MongoDB + Mongoose
Authentication: Express Session, Passport.js (if used)
Image Storage: Cloudinary
Maps: Mapbox (optional)
Deployment: Render
📁 Project Structure
bookmystay/
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── utils/
├── cloudConfig/
├── app.js
├── package.json
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/bookmystay.git
cd bookmystay
2. Install dependencies
npm install
3. Create .env file
NODE_ENV=development
PORT=8080
MONGO_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
SESSION_SECRET=your_secret
MAPBOX_TOKEN=your_token (optional)
4. Run the project
npm start

OR (development mode)

npm run dev
🌐 Deployment (Render)
Connect your GitHub repository
Add environment variables in Render dashboard

Set build command:

npm install

Start command:

node app.js
🧠 Common Issues
❌ MongoDB connection error
Check MONGO_URL
Ensure IP is allowed in MongoDB Atlas
❌ Cloudinary upload error
Verify API keys in .env
❌ Map not loading
Check Mapbox token validity
📸 Screenshots

(Add your project screenshots here)

👨‍💻 Author
Ritik Gupta
📜 License

This project is for educational purposes only.

## 📁 Project Structure
