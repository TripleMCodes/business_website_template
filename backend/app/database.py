from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

DATABASE_URL = (
    os.getenv("DATABASE_URL") or
  "postgresql+psycopg2://postgres:1234@localhost:5432/dev_biz_db"
)

engine = create_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True,
    future=True
)

SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
    expire_on_commit=False
)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()