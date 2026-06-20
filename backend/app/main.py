from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
# from scipy import stats
from sqlalchemy.orm import Session
from fastapi.params import Body

from .routers import auth

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)

@app.get('/')
async def index():
    return {"message": "Hello world!"}
