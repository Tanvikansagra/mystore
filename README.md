# MyStore - Full Stack MERN Product Application

A modern full-stack web application built with React, Node.js, Express, and Tailwind CSS. This project allows users to browse products, search, and add new products to the store.

## 📋 Project Structure

```
mystore/
├── backend/                 # Node.js & Express backend
│   ├── controllers/        # API controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── api/           # API calls configuration
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main App component
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Global styles with Tailwind
│   ├── public/            # Static files
│   ├── package.json       # Frontend dependencies
│   └── .env.local         # Environment variables
│
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Windows PowerShell or Terminal

### Installation & Setup

#### 1. **Setup Backend**

```bash
cd backend
npm install
```

Create or verify `.env` file in the backend directory:
```
PORT=5000
MONGO_URL=mongodb://localhost:27017/mystore
NODE_ENV=development
```

#### 2. **Setup Frontend**

```bash
cd frontend
npm install
```

Verify `.env.local` file in the frontend directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 🏃 Running the Application

### **Method 1: Using Separate Terminals (Recommended)**

**Terminal 1 - Start Backend:**
```bash
cd c:\xamppp\htdocs\mystore\backend
node server.js
```

Expected output:
```
[dotenv@17.2.3] injecting env (2) from .env
✅ Server running on http://localhost:5000
```

**Terminal 2 - Start Frontend:**
```bash
cd c:\xamppp\htdocs\mystore\frontend
npm start
```

Expected output:
```
Compiled successfully!

You can now view mystore-frontend in the browser.

  Local:            http://localhost:3000
```

### **Method 2: Using Windows PowerShell (Quick Start)**

Run both commands in sequence:

```powershell
# Terminal 1
cd c:\xamppp\htdocs\mystore\backend; node server.js

# Terminal 2 (Open new PowerShell window)
cd c:\xamppp\htdocs\mystore\frontend; npm start
```

---

## 🌐 Access the Application

Once both servers are running, open your browser and navigate to:

```
http://localhost:3000
```

### UI Features:
- ✅ **Product List** - View all products in a responsive grid
- ✅ **Search** - Search products by name or description
- ✅ **Add Product** - Click "+ Add Product" to open a modal form
- ✅ **Modern Styling** - Built with Tailwind CSS for beautiful UI

---

## 📡 API Endpoints

### Get All Products
```
GET http://localhost:5000/api/products
```

**Optional Query Parameter:**
```
GET http://localhost:5000/api/products?q=search_term
```

**Response:**
```json
[
  {
    "_id": "1702425600000",
    "name": "Product Name",
    "price": 99.99,
    "description": "Product description",
    "image": "https://image-url.jpg",
    "category": "Category Name"
  }
]
```

### Add Product
```
POST http://localhost:5000/api/addproducts
```

**Request Body:**
```json
{
  "name": "New Product",
  "price": 49.99,
  "description": "Product description",
  "image": "https://image-url.jpg",
  "category": "Electronics"
}
```

**Response:**
```json
{
  "message": "Product added successfully",
  "product": {
    "_id": "1702425600000",
    "name": "New Product",
    "price": 49.99,
    "description": "Product description",
    "image": "https://image-url.jpg",
    "category": "Electronics"
  }
}
```

### Health Check
```
GET http://localhost:5000/api/health
```

**Response:**
```json
{
  "status": "Server is running"
}
```

---

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables management

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

### Styling
- **Tailwind CSS v3.3.2** - Responsive design
- **PostCSS** - CSS transformation
- **Autoprefixer** - Browser compatibility

---

## 📦 Dependencies

### Backend (`backend/package.json`)
```json
{
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "express": "^4.22.1",
  "mongoose": "^7.2.2"
}
```

### Frontend (`frontend/package.json`)
```json
{
  "axios": "^1.13.2",
  "react-router-dom": "^6.30.2",
  "react-scripts": "5.0.1"
}
```

### Dev Dependencies (Frontend)
```json
{
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24",
  "tailwindcss": "^3.3.2"
}
```

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:

**Kill the process using the port:**
```powershell
# For port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# For port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Not Installing
```bash
npm cache clean --force
rm -r node_modules package-lock.json
npm install
```

### Tailwind CSS Not Working
Ensure `tailwindcss` v3.3.2 is installed:
```bash
npm install tailwindcss@3.3.2 postcss@8.4.24 autoprefixer@10.4.14
```

### API Not Responding
1. Verify backend is running: `curl http://localhost:5000/api/health`
2. Check `.env.local` file has correct `REACT_APP_API_URL`
3. Ensure CORS is enabled (should be in `server.js`)

### Frontend Not Loading
1. Check if port 3000 is available
2. Check browser console for errors (F12)
3. Verify all npm dependencies are installed: `npm install`

---

## 📝 Environment Variables

### Backend (`.env`)
```env
PORT=5000                                    # Server port
MONGO_URL=mongodb://localhost:27017/mystore  # MongoDB connection string
NODE_ENV=development                         # Environment mode
```

### Frontend (`.env.local`)
```env
REACT_APP_API_URL=http://localhost:5000/api  # Backend API URL
```

---

## 🎨 Customization

### Modify Port Numbers
**Backend:** Edit `server.js` line with `const PORT = process.env.PORT || 5000;`

**Frontend:** Add to `.env.local`:
```
PORT=3001
```

### Add New Routes
1. Create controller in `backend/controllers/`
2. Create route in `backend/routes/`
3. Import and use in `server.js`

### Styling Changes
- Modify `frontend/src/index.css` for global styles
- Use Tailwind classes in JSX components
- Update `frontend/tailwind.config.js` for custom theme

---

## 📚 Available Scripts

### Backend
```bash
npm start   # Run production server
npm run dev # Run with nodemon (auto-reload)
```

### Frontend
```bash
npm start   # Start development server
npm build   # Build for production
npm test    # Run tests
```

---

## 🤝 Project Status

✅ **Completed Features:**
- Backend API with Express.js
- Frontend UI with React & Tailwind CSS
- Get all products with search functionality
- Add new products with validation
- CORS enabled for cross-origin requests
- Responsive design

📋 **Future Enhancements:**
- MongoDB integration (currently using in-memory storage)
- User authentication & authorization
- Product details page
- Shopping cart functionality
- Order management system
- Admin dashboard
- Payment integration

---

## 📧 Support

For issues or questions, please check:
1. The troubleshooting section above
2. Terminal/console error messages
3. Browser Developer Tools (F12)
4. Verify all ports are available and accessible

---

## 📄 License

This project is provided as-is for educational purposes.

---

## 🎯 Getting Started Checklist

- [ ] Node.js and npm installed
- [ ] Backend dependencies installed (`cd backend && npm install`)
- [ ] Frontend dependencies installed (`cd frontend && npm install`)
- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 3000
- [ ] Application accessible at `http://localhost:3000`
- [ ] Can add products via UI
- [ ] Can search products via UI
- [ ] API endpoints responding correctly

---

**Happy coding! 🚀**
