#!/usr/bin/env python3
"""
One-time script to create an admin user in the database.
Run this script once to set up the initial admin account.
"""

import sys
import getpass
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine
from app import models, utils

def create_admin():
    # Create database tables if they don't exist
    models.Base.metadata.create_all(bind=engine)

    # Get admin details from user input
    admin_name = input("Enter admin name: ").strip()
    if not admin_name:
        print("Admin name cannot be empty.")
        sys.exit(1)

    password = getpass.getpass("Enter admin password: ")
    if not password:
        print("Password cannot be empty.")
        sys.exit(1)

    confirm_password = getpass.getpass("Confirm admin password: ")
    if password != confirm_password:
        print("Passwords do not match.")
        sys.exit(1)

    # Hash the password
    hashed_password = utils.hash(password)

    # Create admin instance
    admin = models.Admin(
        admin_name=admin_name,
        password=hashed_password
    )

    # Add to database
    db: Session = SessionLocal()
    try:
        # Check if admin already exists
        existing_admin = db.query(models.Admin).filter(models.Admin.admin_name == admin_name).first()
        if existing_admin:
            print(f"Admin '{admin_name}' already exists.")
            sys.exit(1)

        db.add(admin)
        db.commit()
        db.refresh(admin)
        print(f"Admin '{admin_name}' created successfully with ID {admin.admin_id}.")
    except Exception as e:
        db.rollback()
        print(f"Error creating admin: {e}")
        sys.exit(1)
    finally:
        db.close()

if __name__ == "__main__":
    create_admin()