# Car Wash Booking System

## Overview

The Car Wash Booking System is a backend application that manages user registrations, service bookings, and slot scheduling for a car wash business. The system is built using TypeScript, Express.js, and MongoDB with Mongoose as the ODM.

## Features

- User authentication and authorization (admin and user roles).
- CRUD operations for services.
- Slot management for service bookings.
- Booking services for users.
- Error handling and transaction management.

## Technology Stack

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **ZOD:** ZOD
- **JWT:** JWT

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/car-wash-booking-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd car-wash-booking-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:

   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. Start the server Development:
   ```bash
   npm run start:dev
   ```
   
6. TSC Watch Mode:
   ```bash
   tsc --watch
   ```
   
7. Start the server Production:
   ```bash
   npm run start:prod
   ```

## API Endpoints

### User Routes

#### 1. User Sign Up

- **Route:** `/api/auth/signup`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Programming Hero",
    "email": "web@programming-hero.com",
    "password": "ph-password",
    "phone": "1234567890",
    "role": "admin", // role can be 'user' or 'admin'
    "address": "123 Main Street, City, Country"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "User registered successfully",
    "data": {
      "_id": "60629b8e8cfcd926384b6e5e",
      "name": "Programming Hero",
      "email": "web@programming-hero.com",
      "phone": "1234567890",
      "role": "admin",
      "address": "123 Main Street, City, Country",
      "createdAt": "2024-06-15T12:00:00Z",
      "updatedAt": "2024-06-15T12:00:00Z"
    }
  }
  ```

#### 2. User Login

- **Route:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "web@programming-hero.com",
    "password": "ph-password"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "User logged in successfully",
    "token": "your_jwt_token",
    "data": {
      "_id": "60629b8e8cfcd926384b6e5e",
      "name": "Programming Hero",
      "email": "web@programming-hero.com",
      "phone": "1234567890",
      "role": "admin",
      "address": "123 Main Street, City, Country",
      "createdAt": "2024-06-15T12:00:00Z",
      "updatedAt": "2024-06-15T12:00:00Z"
    }
  }
  ```

### Service Routes

#### 3. Create Service (Admin Only)

- **Route:** `/api/services`
- **Method:** `POST`
- **Headers:**
  ```text
  Authorization: Bearer your_jwt_token
  ```
- **Request Body:**
  ```json
  {
    "name": "Car Wash",
    "description": "Professional car washing service",
    "price": 50,
    "duration": 60, // Duration in minutes
    "isDeleted": false
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "Service created successfully",
    "data": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Car Wash",
      "description": "Professional car washing service",
      "price": 50,
      "duration": 60,
      "isDeleted": false,
      "createdAt": "2024-06-15T12:00:00Z",
      "updatedAt": "2024-06-15T12:00:00Z"
    }
  }
  ```

#### 4. Get a Service

- **Route:** `/api/services/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "Service retrieved successfully",
    "data": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Car Wash",
      "description": "Professional car washing service",
      "price": 50,
      "duration": 60,
      "isDeleted": false,
      "createdAt": "2024-06-15T12:00:00Z",
      "updatedAt": "2024-06-15T12:00:00Z"
    }
  }
  ```

#### 5. Get All Services

- **Route:** `/api/services`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "Services retrieved successfully",
    "data": [
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Car Wash",
        "description": "Professional car washing service",
        "price": 50,
        "duration": 60,
        "isDeleted": false,
        "createdAt": "2024-06-15T12:00:00Z",
        "updatedAt": "2024-06-15T12:00:00Z"
      },
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c6",
        "name": "Oil Change",
        "description": "Regular engine oil change service",
        "price": 30,
        "duration": 30,
        "isDeleted": false,
        "createdAt": "2024-06-15T12:00:00Z",
        "updatedAt": "2024-06-15T12:00:00Z"
      },
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c7",
        "name": "Tire Rotation",
        "description": "Rotation of vehicle tires",
        "price": 20,
        "duration": 45,
        "isDeleted": false,
        "createdAt": "2024-06-15T12:00:00Z",
        "updatedAt": "2024-06-15T12:00:00Z"
      }
    ]
  }
  ```

#### 6. Update Service (Admin Only)

- **Route:** `/api/services/:id`
- **Method:** `PUT`
- **Headers:**
  ```text
  Authorization: Bearer your_jwt_token
  ```
- **Request Body:**
  ```json
  {
    "price": 700 // You can include any attribute(s) of the service collection that you want to update, one or more.
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "Service updated successfully",
    "data": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Car Wash",
      "description": "Professional car washing service",
      "price": 700,
      "duration": 60,
      "isDeleted": false,
      "createdAt": "2024-06-15T12:00:00Z",
      "updatedAt": "2024-06-15T12:00:00Z"
    }
  }
  ```

#### 7. Delete Service (Admin Only - Soft Delete)

- **Route:** `/api/services/:id`
- **Method:** `DELETE`
- **Headers:**
  ```text
  Authorization: Bearer your_jwt_token
  ```
- **Response:**

  ````json
  {
      "success": true,
      "statusCode": 200,
      "message": "Service deleted successfully",
      "data": {
          "_id": "60d9c4e4f3b4b544b8b8d1c5",
          "name": "Car Wash",
          "description": "Professional car washing service",
          "price": 50,
          "duration": 60,
          "isDeleted": true,
          "createdAt": "2024-06-15T12:00:00Z"
            }
  }

        ```
  ````

### Booking Routes

#### 8. Create Booking

- **Route:** `/api/bookings`
- **Method:** `POST`
- **Headers:**
  ```text
  Authorization: Bearer your_jwt_token
  ```
- **Request Body:**
  ```json
  {
    "serviceId": "60d9c4e4f3b4b544b8b8d1c5", // ID of the service to book
    "slotId": "60d9c4e4f3b4b544b8b8d1c5", // ID of the available time slot
    "bookingDate": "2024-06-20T12:00:00Z" // Date and time of the booking
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "Booking created successfully",
    "data": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "serviceId": "60d9c4e4f3b4b544b8b8d1c5",
      "userId": "60d9c4e4f3b4b544b8b8d1c5",
      "slotId": "60d9c4e4f3b4b544b8b8d1c5",
      "bookingDate": "2024-06-20T12:00:00Z",
      "createdAt": "2024-06-15T12:00:00Z",
      "updatedAt": "2024-06-15T12:00:00Z"
    }
  }
  ```

#### 9. Get All Bookings (Admin Only)

- **Route:** `/api/bookings`
- **Method:** `GET`
- **Headers:**
  ```text
  Authorization: Bearer your_jwt_token
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "Bookings retrieved successfully",
    "data": [
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "serviceId": "60d9c4e4f3b4b544b8b8d1c5",
        "userId": "60d9c4e4f3b4b544b8b8d1c5",
        "slotId": "60d9c4e4f3b4b544b8b8d1c5",
        "bookingDate": "2024-06-20T12:00:00Z",
        "createdAt": "2024-06-15T12:00:00Z",
        "updatedAt": "2024-06-15T12:00:00Z"
      }
      // More bookings...
    ]
  }
  ```

#### 10. Get User's Bookings

- **Route:** `/api/bookings/user`
- **Method:** `GET`
- **Headers:**
  ```text
  Authorization: Bearer your_jwt_token
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "User's bookings retrieved successfully",
    "data": [
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "serviceId": "60d9c4e4f3b4b544b8b8d1c5",
        "userId": "60d9c4e4f3b4b544b8b8d1c5",
        "slotId": "60d9c4e4f3b4b544b8b8d1c5",
        "bookingDate": "2024-06-20T12:00:00Z",
        "createdAt": "2024-06-15T12:00:00Z",
        "updatedAt": "2024-06-15T12:00:00Z"
      }
      // More bookings...
    ]
  }
  ```

#### 11. Cancel Booking

- **Route:** `/api/bookings/:id`
- **Method:** `DELETE`
- **Headers:**
  ```text
  Authorization: Bearer your_jwt_token
  ```
- **Response:**
  ```json
  {
    "success": true,
    "statusCode": 200,
    "message": "Booking cancelled successfully",
    "data": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "serviceId": "60d9c4e4f3b4b544b8b8d1c5",
      "userId": "60d9c4e4f3b4b544b8b8d1c5",
      "slotId": "60d9c4e4f3b4b544b8b8d1c5",
      "bookingDate": "2024-06-20T12:00:00Z",
      "createdAt": "2024-06-15T12:00:00Z",
      "updatedAt": "2024-06-15T12:00:00Z"
    }
  }
  ```


