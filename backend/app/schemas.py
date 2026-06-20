from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class AdminNameUpdate(BaseModel):
    admin_name: str

class AdminPasswordUpdate(BaseModel):
    current_password: str
    new_password: str

class AdminApiUpdate(BaseModel):
    api_key: Optional[str] = None
    api_url: Optional[str] = None

class UserPasswordUpdate(BaseModel):
    new_password: str

class Token(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str

class TokenData(BaseModel):
    uid: Optional[int] = None
    admin_id: Optional[int] = None