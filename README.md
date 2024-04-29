# Node.js & MongoDB API for Notes and Users

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [API Documentation](#api-documentation)
  - [Notes Endpoints](#notes-endpoints)
    - [Get All Notes](#get-all-notes)
    - [Get Note by ID](#get-note-by-id)
    - [Create Note](#create-note)
    - [Update Note](#update-note)
    - [Delete Note](#delete-note)
  - [Users Endpoints](#users-endpoints)
    - [Get All Users](#get-all-users)
    - [Get User by ID](#get-user-by-id)
    - [Create User](#create-user)
    - [Update User](#update-user)
    - [Delete User](#delete-user)

## Overview

This project is a server application using Node.js, Express, and MongoDB. It features a CRUD (Create, Read, Update, Delete) API for managing `Notes` and `Users`. The application demonstrates how to integrate MongoDB with an Express server, utilizing Mongoose for schema definition, data validation, and database interaction. This is part of the SBA 319 MongoDB Database Application assessment.

## Technology Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. **Install dependencies:**:

   ```bash
   npm install
   ```

3. **Set up environment variables:**:
   Create a .env file in the root directory and add the following:

   ```bash
   DB_URL=mongodb://<your-mongodb-url>
   PORT=3000
   ```

4. **Start the server:**:
   ```bash
   npm start
   ```

## API Documentation

### Notes Endpoints

#### Get All Notes

- **URL**: `/notes`
- **Method**: `GET`
- **Description**: Retrieves all notes from the database.
- **Request Body**: None
- **Response**: JSON array of note objects.

### Users Endpoints

#### Get All Users

- **URL**: `/users`
- **Method**: `GET`
- **Description**: Retrieves all users from the database.
- **Request Body**: None
- **Response**: JSON array of user objects.
