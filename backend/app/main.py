from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
# from scipy import stats
from sqlalchemy.orm import Session
from fastapi.params import Body

from app.routers import auth
from app.routers import app_setttings

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(app_setttings.router)

@app.get('/')
async def index():
    return {"message": "Hello world!"}
