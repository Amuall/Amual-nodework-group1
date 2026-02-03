Student Management System
-- Project Title

Student Management System

-- Project Contributors

Umutoni Sabrina

Muneza Onole

Bazambanza Nayituriki Amuri

Fabrice

-- Project Description

The Student Management System is a RESTful web API developed using Node.js and Express.js.
Its primary purpose is to manage student records efficiently through a MySQL database.
The system supports complete CRUD operations (Create, Read, Update, and Delete), enabling reliable storage and retrieval of student information.

-- Technologies and Tools

Node.js – JavaScript runtime environment

Express.js – Backend framework

MySQL – Relational database system

dotenv – Environment variable management

Postman / Thunder Client – API testing tools

Key Dependencies

mysql

dotenv

body-parser

nodemon

-- Database Setup

Follow the steps below to configure the database:

Start the MySQL server (using XAMPP, MySQL Server, or MySQL Workbench).

Create a database named localstudents.

Execute the following SQL commands to create the student table:

USE student_system;

CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(20) UNIQUE,
  gender VARCHAR(30),
  date_of_birth DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- API Endpoints
HTTP Method	Endpoint	Description
GET	/student	Retrieve all students
GET	/student/:id	Retrieve a student by ID
POST	/student	Create a new student record
PUT	/student/:id	Update an existing student
DELETE	/student/:id	Delete a student record

-- Running the Project Locally
1. Clone the Repository
git clone

2. Navigate to the Project Directory
cd student-system

3. Install Dependencies

Ensure Node.js is installed, then run:

npm install

4. Configure the Database

Start the MySQL server

Import the prepared .sql file into phpMyAdmin or MySQL Workbench

5. Start the Server
node server.js


Or, if nodemon is installed:

nodemon server

6. Access the API

Use a browser or an API testing tool (Postman / Thunder Client) and navigate to:

http://localhost:7000/student

-- Conclusion

This project demonstrates a practical implementation of a RESTful API using Node.js, Express, and MySQL.
It is suitable for academic purposes and serves as a foundation for learning backend development and database integration.