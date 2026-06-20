from jose import JWTError, jwt
from datetime import timedelta, datetime
from . import schemas, database, models
from fastapi import Depends, status, HTTPException, Cookie
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
# from fastapi import Cookie
import logging
logging.basicConfig(level=logging.DEBUG)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='login')

SECRET_KEY = "mysupersupersecretkey0212202020mysecretkey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60
REFRESH_TOKEN_EXPIRE_DAYS = 7

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def create_refresh_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({
        "exp": expire,
        "type": "refresh"
    })
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

 

def verify_access_token(token: str, credential_exception):

    try:
        token = token.strip()
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        uid = payload.get("uid")
        admin_id = payload.get("admin_id")
        if uid is None and admin_id is None:
            raise credential_exception
        return schemas.TokenData(uid=uid, admin_id=admin_id)
    except JWTError as e:
        logging.debug(e)
        raise credential_exception
    
# # token: str = Depends(oauth2_scheme)
# def get_current_user(access_token: str = Cookie(), db: Session = Depends(database.get_db)):
#     credentials_exception = HTTPException(
#         status_code=status.HTTP_401_UNAUTHORIZED,
#         detail="Could not validate credentials",
#         headers={"WWW-Authenticate": "Bearer"},
#     )

#     token = verify_access_token(access_token, credential_exception=credentials_exception)

#     user = db.query(models.Users).filter(models.Users.uid == token.uid).first()

#     # print(f'this is the user: {user}')

#     return user

def get_current_admin(access_token: str = Cookie(), db: Session = Depends(database.get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate admin credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    token = verify_access_token(access_token, credential_exception=credentials_exception)

    if token.admin_id is None:
        raise credentials_exception

    admin = db.query(models.Admin).filter(models.Admin.admin_id == token.admin_id).first()

    return admin