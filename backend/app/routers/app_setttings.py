from fastapi import APIRouter, Depends, Query, status, HTTPException, Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session
from jose import JWTError, jwt
from app.database import engine, get_db
from .. import models, schemas, utils, oauth2
from typing import Optional
import logging
logging.basicConfig(level=logging.DEBUG)

oauth2.SECRET_KEY

router = APIRouter(tags=["Business Settings"])

class BusinessSettingsUpdate(BaseModel):
    business_name: Optional[str] = Field(None, min_length=1, max_length=100)
    business_logo: Optional[str] = Field(None, max_length=255)
    email: Optional[EmailStr] = None
    phone_number: Optional[str] = Field(None, max_length=20)
    address: Optional[str] = Field(None, max_length=255)
    whatsapp_number: Optional[str] = Field(None, max_length=20)
    facebook_url: Optional[str] = Field(None, max_length=255)
    instagram_url: Optional[str] = Field(None, max_length=255)
    linkedin_url: Optional[str] = Field(None, max_length=255)
    x_url: Optional[str] = Field(None, max_length=255)
    youtube_url: Optional[str] = Field(None, max_length=255)

class HomeHeroSettings(BaseModel):
    image_url: Optional[str] = Field(None, max_length=255)
    hero_section_title: Optional[str] = Field(None, max_length=255)
    hero_section_description: Optional[str] = Field(None, max_length=255)
 

DEFAULTS = {
    "business_name": "Unnamed Business",
    "business_logo": None,
    "email": "not-set@example.com",
    "phone_number": "0000000000",
    "address": "Not set",
    "whatsapp_number": None,
    "facebook_url": None,
    "instagram_url": None,
    "linkedin_url": None,
    "x_url": None,
    "youtube_url": None,
}

HOME_DEFAULTS = {
    "image_url": "",
    "hero_section_title": "Crafting beautiful spaces with thoughtful design and natural materials.",
    "hero_section_description": "Interior styling, landscape accents, and bespoke home details that feel warm, elegant, and timeless.",
}



@router.get('/api/app/settings')
def app_settings(
    current_admin: models.Admin = Depends(oauth2.get_current_admin),
    db: Session = Depends(get_db),
):
    app_settings_data = db.query(models.business_settings).all()
    return app_settings_data


@router.patch("/api/app/settings/app/update")
def update_business_settings(
    payload: BusinessSettingsUpdate,
    db: Session = Depends(get_db),
):
    settings = db.query(models.business_settings).first()
    incoming = payload.model_dump(exclude_unset=True)

    if settings is None:
        # Build the new row: incoming values win, defaults fill the rest.
        data = {**DEFAULTS, **incoming}
        settings = models.business_settings(**data)
        db.add(settings)
    else:
        for field, value in incoming.items():
            setattr(settings, field, value)

    db.commit()
    db.refresh(settings)
    return settings

@router.get("/api/app/settings/app/home")
def get_home_hero(
    db: Session = Depends(get_db),
    ):
    home_hero_settings = db.query(models.HomepageContent).first()
    
    if home_hero_settings is None:
        home_hero_settings = models.HomepageContent(**HOME_DEFAULTS)
        db.add(home_hero_settings)
        db.commit()
        db.refresh(home_hero_settings)
    
    return home_hero_settings


@router.patch("/api/app/settings/app/home")
def update_home_hero(
    payload: HomeHeroSettings,
    current_admin: models.Admin = Depends(oauth2.get_current_admin),
    db: Session = Depends(get_db)
):
    home_hero_settings = db.query(models.HomepageContent).first()
    incoming = payload.model_dump(exclude_unset=True)

    if home_hero_settings is None:
        data = {**HOME_DEFAULTS, **incoming}
        home_hero_settings = models.HomepageContent(**data)
        db.add(home_hero_settings)
    else:
        for field, value in incoming.items():
            setattr(home_hero_settings, field, value)

    db.commit()
    db.refresh(home_hero_settings)
    return home_hero_settings