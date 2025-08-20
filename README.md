### Code Quality

#### Backend
```bash
# Code formatting
black app/
isort app/

# Linting
flake8 app/

# Type checking
mypy app/
```

#### Frontend
```bash
# Code formatting
npm run format

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🔒 Security Features

- **JWT Authentication** with secure token handling
- **Password Hashing** with bcrypt
- **CORS Configuration** for cross-origin requests
- **Input Validation** with Pydantic schemas
- **SQL Injection Protection** with SQLAlchemy ORM
- **XSS Protection** with proper data sanitization# FastAPI + Next.js Authentication System

A full-stack authentication system built with **FastAPI** (backend), **Next.js** (frontend), and **shadcn/ui** for modern UI components. Features JWT-based authentication and password reset functionality.

## 🚀 Tech Stack

### Backend
- **FastAPI** - High-performance Python web framework
- **SQLAlchemy** - SQL toolkit and ORM
- **PostgreSQL** - Production database
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### DevOps
- **Docker** - Containerization

## 📁 Project Structure

```
fastapi-n-nextjs-auth-only-app/
├── backend/                     # FastAPI application
│   ├── app/
│   │   ├── models/             # Database models
│   │   ├── routes/             # API endpoints
│   │   ├── schemas/            # Pydantic schemas
│   │   ├── services/           # Business logic
│   │   └── utils/              # Utility functions
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/                   # Next.js application
│   ├── src/
│   │   ├── app/               # Next.js App Router
│   │   ├── components/        # React components
│   │   ├── contexts/          # React contexts
│   │   └── lib/               # Utilities
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml         # Multi-container setup
```

## ✨ Features

- 🔐 **User Authentication**
  - User registration and login
  - JWT token-based authentication
  - Secure password hashing with bcrypt
  - Protected routes and middleware

- 🔑 **Password Management**
  - Password reset functionality
  - Email-based reset tokens
  - Secure password validation

- 🎨 **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - Beautiful components with shadcn/ui
  - Form validation and error handling
  - Loading states and user feedback

## 🛠️ Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.8+ and pip
- **PostgreSQL** (or use Docker)
- **Docker & Docker Compose** (optional)

### Option 1: Docker Setup (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jain-Paul-9933/fastapi-n-nextjs-auth-only-app.git
   cd fastapi-n-nextjs-auth-only-app
   ```

2. **Environment Setup**
   ```bash
   # Backend environment
   cp backend/.env.example backend/.env
   
   # Frontend environment
   cp frontend/.env.local.example frontend/.env.local
   
   # Update the .env files with your configuration
   ```

3. **Start with Docker**
   ```bash
   docker-compose up --build
   ```

4. **Access the applications**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

### Option 2: Manual Setup

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Setup database**
   ```bash
   # Create PostgreSQL database
   createdb fastapi_auth
   
   # Create tables (FastAPI will auto-create them on first run)
   ```

5. **Start the server**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

#### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup shadcn/ui**
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add button card input label form toast
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📝 Environment Variables

### Backend (.env)
```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/fastapi_auth

# JWT
SECRET_KEY=your-super-secret-jwt-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Email (for password reset)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Frontend (.env.local)
```env
# API URLs
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

## 🚀 Deployment

### Using Docker
```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment

#### Backend
```bash
# Install dependencies
pip install -r requirements.txt

# Create database tables (auto-created on startup)
# Start with Gunicorn
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

#### Frontend
```bash
# Build the application
npm run build

# Start the server
npm start
```

## 📊 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Key Endpoints

```
POST   /auth/register          # User registration
POST   /auth/login            # User login
POST   /auth/refresh          # Refresh JWT token
POST   /auth/forgot-password  # Request password reset
POST   /auth/reset-password   # Reset password
GET    /auth/me              # Get current user
PUT    /auth/me              # Update current user
GET    /health               # Health check
```

## 🧰 Development

### Backend
```bash
# Code formatting
black app/
isort app/

# Linting
flake8 app/

# Type checking
mypy app/
```

### Frontend
```bash
# Code formatting
npm run format

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📈 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that:

1. **Code Quality Checks**
   - Runs tests for both backend and frontend
   - Checks code formatting and linting
   - Performs TypeScript type checking

2. **Security Scanning**
   - Scans dependencies for vulnerabilities
   - Performs container security scans
   - Generates security reports

3. **Build & Deploy**
   - Builds Docker images
   - Pushes images to GitHub Container Registry
   - Deploys to staging/production environments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all CI checks pass

## 📋 TODO

- [ ] OAuth integration (Google, GitHub)
- [ ] Two-factor authentication (2FA)
- [ ] User roles and permissions
- [ ] Email verification
- [ ] Account lockout after failed attempts
- [ ] Password strength meter
- [ ] Session management
- [ ] Audit logging

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Check PostgreSQL is running
pg_isready -h localhost -p 5432

# Verify database exists
psql -l | grep fastapi_auth
```

**Frontend Module Not Found**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Docker Issues**
```bash
# Clean up containers and images
docker-compose down
docker system prune -a
docker-compose up --build
```

### Getting Help

- Check the [Issues](https://github.com/Jain-Paul-9933/fastapi-n-nextjs-auth-only-app/issues) page
- Review the [API Documentation](http://localhost:8000/docs)
- Read the code comments and docstrings

## 👥 Authors

- **Jain Paul** - [@Jain-Paul-9933](https://github.com/Jain-Paul-9933)

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) for the amazing Python web framework
- [Next.js](https://nextjs.org/) for the powerful React framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling

---

⭐ **Star this repository** if you find it helpful!

🔗 **Live Demo**: [Coming Soon]

📧 **Contact**: japs9933@gmail.com
