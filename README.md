# ToDo Rest Service Documentation

# Introduction

## Project Overview

This project is a ToDo list service built with NodeJS, Express and MongoDB.

## Features

This project uses JWT for Authentication and Authorization.

CRUD operations for user activities(To Do's)

## Dependencies

bcryptjs, cors, dotenv, express, helmet, joi, jsonwebtoken, mongoose, validator, nodemon

# API

## Models

- Models are created using the [mongoose](https://mongoosejs.com/) library.
- Validations for the model properies is created with validator and joi libraries.

## Services

- **AUTH SERVICE:** services for register, login and logout.
- **ACTIVITY SERVICE:** services for CRUD operations upon To Do's and their storage.
- **USER SERVICE:** service to get all activities for a user.

## Controllers

- **AUTH CONTROLLER:** handles requests for register, login and logout.
- **ACTIVITY CONTROLLER:** handles requests for CRUD operations on To Do's.
- **USER CONTROLLER:** handles requests for getting activities for a user.

## Routes

Endpoints for each service.

## Middlewares

- ### Auth Middleware

  - Middleware to check if the user is eligible to make requests.

- ### Validation Middleware

  - Middleware for validating the activity model.

# TESTING

## Testing this service can be done with the following steps:

- Clone this repository to your local machine.

- Locate to the directory of the project in terminal and write: `npm install` to install all the dependencies for the project.

- Create .env file to store your enviroment variables.

- Replace the MONGO_URI variable in the index.js file with your MongoDB Atlas URI.

- Run `npm start` to start the application.

- Import the [Postman](https://web.postman.co/) collections from the collections folder to your postman workspace.
