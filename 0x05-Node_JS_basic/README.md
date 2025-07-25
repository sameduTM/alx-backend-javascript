0x05. NodeJS Basics
# Back-end
# JavaScript
# ES6
# NodeJS
# ExpressJS

## Description
This project covers the basics of Node.js, including fundamental concepts, file operations, HTTP servers, and Express.js framework.

## Learning Objectives
At the end of this project, you should be able to explain:
- What Node.js is and how to use it
- How to use Node.js modules
- How to use specific Node.js modules to read files
- How to use process to access command line arguments and the environment
- How to create a small HTTP server using Node.js
- How to create a small HTTP server using Express JS
- How to create advanced routes with Express JS
- How to use ES6 with Node.js with Babel-node
- How to use Nodemon to develop faster

## Requirements
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint

## Tasks

### 0. Executing basic javascript with Node JS
Write a function named `displayMessage` that prints in STDOUT the string argument.

### 1. Using Process stdin
Create a program named `1-stdin.js` that will be executed through command line.

### 2. Reading a file synchronously with Node JS
Create a function `countStudents` that reads the database file synchronously.

### 3. Reading a file asynchronously with Node JS
Create a function `countStudents` that reads the database file asynchronously.

### 4. Create a small HTTP server using Node's HTTP module
Create a small HTTP server using the http module.

### 5. Create a more complex HTTP server using Node's HTTP module
Create a small HTTP server using the http module with different routes.

### 6. Create a small HTTP server using Express
Install Express and create a small HTTP server using Express module.

### 7. Create a more complex HTTP server using Express
Create a small HTTP server using Express module with different routes.

## Setup
```bash
npm install
```

## Usage
```bash
npm run test
npm run lint
```