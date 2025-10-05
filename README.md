# 🍽️ Food App - Social Food Discovery Platform

A modern, TikTok-style social platform for food discovery where users can browse food videos, like and save content, while food partners can showcase their culinary creations through engaging video content.

![Food App](https://img.shields.io/badge/React-19.1.1-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green) ![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)

## ✨ Features

### 👥 Dual User System
- **Regular Users**: Browse food videos, like content, save favorites
- **Food Partners**: Create and upload food videos, manage profile, showcase offerings

### 🎥 Video-First Experience
- **TikTok-style Interface**: Vertical video reels with smooth scrolling
- **Auto-play Videos**: Intelligent video playback based on viewport visibility
- **Interactive Actions**: Like, save, and comment on food content
- **Video Upload**: Food partners can upload high-quality food videos

### 🔐 Authentication & Security
- **JWT-based Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Role-based Access**: Separate authentication for users and food partners

### 📱 Modern UI/UX
- **Responsive Design**: Works seamlessly on all devices
- **Bottom Navigation**: Intuitive mobile-first navigation
- **Dark Theme Support**: Modern, eye-friendly interface
- **Smooth Animations**: Polished user interactions

## 🚀 Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with modern CSS features

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload handling
- **ImageKit** - Cloud-based image/video management

### Key Dependencies
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **cookie-parser** - Cookie parsing middleware
- **uuid** - Unique identifier generation

## 📁 Project Structure

```
Food-App Project/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── BottomNav.jsx
│   │   │   └── ReelFeed.jsx
│   │   ├── contexts/        # React context providers
│   │   │   └── AuthContext.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── auth/        # Authentication pages
│   │   │   ├── food-partner/ # Food partner pages
│   │   │   └── general/     # General user pages
│   │   ├── routes/          # Routing configuration
│   │   └── styles/          # CSS stylesheets
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middlewares/     # Custom middlewares
│   │   ├── services/        # Business logic services
│   │   └── db/              # Database configuration
│   └── uploads/             # File uploads directory
└── vdeos/                   # Sample video assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Food-App-Project
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```

### 4. Access the Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

## 📱 Key Features Explained

### 🎬 Video Reel System
- **Intersection Observer**: Automatically plays videos when in view
- **Smooth Scrolling**: Optimized for mobile-like experience
- **Video Controls**: Muted autoplay with manual controls

### 👤 User Management
- **Separate Registration**: Different flows for users and food partners
- **Profile Management**: Food partners can manage their business profiles
- **Authentication**: Secure login/logout with JWT tokens

### 🍕 Food Content
- **Video Upload**: Food partners can upload cooking videos
- **Content Discovery**: Users browse through food videos
- **Social Features**: Like, save, and interact with content

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/user/register` - User registration
- `POST /api/auth/user/login` - User login
- `POST /api/auth/food-partner/register` - Food partner registration
- `POST /api/auth/food-partner/login` - Food partner login

### Food Management
- `GET /api/food` - Get all food videos
- `POST /api/food` - Create new food video (Food partners only)
- `PUT /api/food/:id/like` - Like/unlike food video
- `PUT /api/food/:id/save` - Save/unsave food video

### User Management
- `GET /api/food-partner/:id` - Get food partner profile
- `PUT /api/food-partner/:id` - Update food partner profile

## 🎨 UI/UX Highlights

- **Mobile-First Design**: Optimized for mobile devices
- **Dark Theme**: Modern, eye-friendly interface
- **Smooth Animations**: Polished user interactions
- **Responsive Layout**: Works on all screen sizes
- **Accessibility**: ARIA labels and semantic HTML

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Heroku/Railway/DigitalOcean)
```bash
cd backend
# Set environment variables
# Deploy with your preferred platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- Express.js for the robust backend framework
- All open-source contributors

---

**Made with ❤️ for food lovers everywhere!** 🍕🍔🍰
