from fastapi import APIRouter, Depends, Query, status, HTTPException, Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from jose import JWTError, jwt
from app.database import engine, get_db
from .. import models, schemas, utils, oauth2
from typing import Optional
import logging
logging.basicConfig(level=logging.DEBUG)

oauth2.SECRET_KEY

router = APIRouter(tags=['Authentication'])

@router.post('/api/admin/login', response_model=schemas.Token)
def admin_login(admin_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):

    logging.debug(f"logging in admin")
    
    admin = db.query(models.Admin).filter(models.Admin.admin_name == admin_credentials.username).first()

    if not admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
            detail=f'Invalid admin credentials'
        )
    
    if not utils.verify(admin_credentials.password, admin.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f'Invalid admin credentials')
    
    #create a token
    access_token = oauth2.create_access_token(data = {'admin_id': int(admin.admin_id)})
    refresh_token = oauth2.create_refresh_token({"admin_id": int(admin.admin_id)})

    return {
    "access_token": access_token,
    "refresh_token": refresh_token,
    "token_type": "bearer"
        }

@router.patch('/api/admin/settings/name')
def admin_change_name(
    payload: schemas.AdminNameUpdate,
    current_admin: models.Admin = Depends(oauth2.get_current_admin),
    db: Session = Depends(get_db),
):
    existing = db.query(models.Admin).filter(models.Admin.admin_name == payload.admin_name).first()
    if existing and existing.admin_id != current_admin.admin_id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Admin name is already taken.')

    current_admin.admin_name = payload.admin_name
    db.commit()
    db.refresh(current_admin)
    return {"message": "Admin name updated successfully."}


@router.patch('/api/admin/settings/password')
def admin_change_password(
    payload: schemas.AdminPasswordUpdate,
    current_admin: models.Admin = Depends(oauth2.get_current_admin),
    db: Session = Depends(get_db),
):
    if not utils.verify(payload.current_password, current_admin.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Current password is incorrect.')

    current_admin.password = utils.hash(payload.new_password)
    db.commit()
    return {"message": "Admin password updated successfully."}