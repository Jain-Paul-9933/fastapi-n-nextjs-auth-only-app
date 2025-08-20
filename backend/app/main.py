from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.models.user import User
from app.routes import auth

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Authentication API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)

@app.get("/")
def read_root():
    return {"message": "Authentication API is running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}