# CARECONNECT APP.
<p align="center">
  <img src="client/public/golden-swing-1964101_1280.png" alt="CARECONNECT-LOGO"  po  width="300" height="200">
</p>  

## INTRODUCTION

CareConnect  is a web application designed to connect healthcare providers i.e hospitals with patients efficiently. It facilitates patient registration, appointment scheduling, service management and medical record management. This README provides an overview of the project, installation instructions, usage guidelines and development notes.

## PROBLEM STATEMENT.
Many healthcare facilities struggle with efficient management of patient information, appointments, and medical records. Patients are also wary of hidden fees in hospitals and desire a way to see all services received and current bill.This project provides a way for patients to track their bill.
Manual processes are often time-consuming, error-prone, and can lead to miscommunication between departments. This results in longer wait times for patients, increased administrative burden on staff, and potential risks to patient care quality.

## THE SOLUTION.
We came up as a team to build an easy to use and efficient Careconnect App which registers and stores patient records securely, allows patient to book appointments and can view their records on their patient profile once logged in. The app allows patients to view available services and their prices and plan well before visiting the facility. Through appointments the hospitals are able to manage and schedule time and their staffs accordingly without any confusion. The app also allows admins to view or cancel appointments; add, view or delete services whenever; add, update, view and delete patient details as needed.


## Features
- ## User Roles
The app's homepage requests a person to define themselves either as a patient or an admin(Healthcare provider).
  - ## As a Patient:
Can view available services and their prices, register and login, book appointments and view medical records.
  - ## As an Admin: 
Can manage services, appointments, and update patients records.

- ## Service Management:
  - Add, view and delete services.
  - View service details.

- ## Appointment management:
  - Schedule, view and cancel appointments.

- ## Patient Management:
  - Register, view, update details and delete patients.
  - View patient details.

- ## Medical records(Patient Profile):
  - View, store and update patients medical records.
  - Accessible to authorized healthcare providers and patients.

- ## Admin panel:
  - Admin dashboard for managing patient accounts, appointments and services.

## ENDPOINTS:
1. ## User Authentication and Authorization Endpoints
Purpose: Handles user registration, login and logout.
 - POST /api.add_resource(PatientResource, '/patients', '/patient'): /patient 

  - Description: Registers a new patient in the system.
  - Request Body: { username,first_name,last_name, date_of_birth, contact_number, email,password }
  - Response: { success: true, message: "User registered        successfully" }

- POST /api.add_resource(Login, '/login'): /login

  - Description: Logs in a user or an admin and generates a JWT token for   authentication.
  - Request Body: { username, password }
  - Response: { success: true, token: "your_jwt_token_here" }

- POST /api.add_resource(Logout, '/logout'): /logout

  - Description: Logs out the patient by invalidating the current JWT token.
  - Authorization: Bearer token in headers.
  - Response: { success: true, message: "Logged out successfully" }

2. ##  Appointment Management Endpoints
Purpose: Handles CRUD operations related to appointments.

- POST /api.add_resource(AppointmentResource, '/appointments',): /appointments

  - Description: Creates a new appointment.
  - Authorization: Bearer token in headers.
  - Request Body: { patientId, doctorId, appointmentDate, reason}
  - Response: { success: true, message: "Appointment created successfully" }

- GET /api.add_resource(AppointmentResource, '/appointments',): /appointments

  - Description: Retrieves all appontments with their details.
  - Authorization: Bearer token in headers.
  - Response: { success: true, appointment: { ... } }

- DELETE /api.add_resource(AppointmentByID, '/appointments/<int:appointment_id>', endpoint='appointment_by_id'): /appointments/${selectedAppointment.id}

  - Description: Cancels an appointment.
  - Authorization: Bearer token in headers.
  - Response: { success: true, message: "Appointment canceled successfully" }

3. ##  Service Management Endpoints
Purpose: Handles CRUD operations related to Services.

- POST /api.add_resource(services_data,'/services_data', endpoint='services_data'): /services_data

  - Description: Creates a new service.
  - Authorization: Bearer token in headers.
  - Request Body: { name, description, price}
  - Response: { success: true, message: "Service created successfully" }

- GET /api.add_resource(services_data,'/services_data', endpoint='services_data')

  - Description: Retrieves all services with their details.
  - Authorization: Bearer token in headers.
  - Response: { success: true, servces: { ... } }

- DELETE /api.add_resource(ServiceByID, '/service_data/<int:service_id>'): /service_data/${id}

  - Description: Deletes a service.
  - Authorization: Bearer token in headers.
  - Response: { success: true, message: "Service deleted successfully" }

4. ##  Patient Management Endpoints
Purpose: Handles CRUD operations related to Services.

- POST /api.add_resource(PatientResource, '/patients', '/patient'): /patients

  - Description: Creates a new patient in the system.
  - Authorization: Bearer token in headers.
  - Request Body: { username,first_name,last_name, date_of_birth, contact_number, email,password}
  - Response: { success: true, message: "patient created successfully" }

- GET /api.add_resource(PatientResource, '/patients', '/patient'): /patients

  - Description: Retrieves all patients with their details.
  - Authorization: Bearer token in headers.
  - Response: { success: true, patients: { ... } }

 PATCH /api.add_resource(PatientByID, '/patient/<int:patient_id>', endpoint='patient_by_id'): /patient/${id}

  - Description: Updates patient details.
  - Authorization: Bearer token in headers.
  - Response: { success: true, message: "Patient updated successfully" }  

- DELETE /api.add_resource(PatientByID, '/patient/<int:patient_id>', endpoint='patient_by_id'): /patient/${id}

  - Description: Deletes a patient.
  - Authorization: Bearer token in headers.
  - Response: { success: true, message: "Patient deleted successfully" }

  ## Additional Considerations
    - Error Handling: Implement robust error handling for each endpoint to provide meaningful error messages and status codes.
    - Validation (login page): Validate incoming data to ensure it meets expected formats and criteria.



## Prerequisites:
- React
- Python 3.8.13
- Flask sqlalchemy
- An active database  and client side connection.

## Installations:
- ## Backend:
  - Ensure atleast python 3.8.13 is installed in your system.
  - Install required packages using pip:
        pip install flask-sqlalchemy, sqlalchemy_serializer, flask_bcrypt, flask_jwt_extended, faker and any other incase the app requires.

- ## Frontend:
  - Ensure Reactjs is installed in your system.

## To run Careconnect locally, follow these steps:
1. ## Clone the repository:
      git clone https://github.com/Maurine6/careconnect.git
      cd careconnect
2. ## Client side
  -  To download the dependencies for the frontend client, run:
           npm install --prefix client;
  - You can run your React app on localhost:3000 by running: 
            npm start --prefix client

  - Check that your the React client displays a default page http://localhost:3000. You should see a web page with the heading "Welcome to CareConnect".   

3. ## Open another terminal: Run Server side.
  - Install dependencies:
      pipenv install

  - Set up environment:    
      pipenv shell

4. ## Run the application:
      cd server
      python seed.py
      python app.py

5. ## Access the application:
- Open your web browser and go to 'http://localhost: 3000' to use Careconnect.

## Usage
- ## Patient Workflow:
  1. Register or login.
  2. Schedule appointment with the doctor.
  3. View personal  medical records(patient profile).

- ## Admin Wokflow: 
  1. Login.
  2. Manage appointments by either keeping or cancelling schedules.
  3. Manage services by either adding, viewing, or deleting a service.
  4. Manage patients by viewing, updating patient details and deleting a patient.

## Development Notes:
- ~ client~: Contains  the frontend code built with React.js.
- ~ server~: Contains the backend code built with flask sqlalchemy(python)
- ~ models~: Defines Flask app db schemas using sqlalchemy.
- ~ routes~: Defines API routes for authentication
- ~config~: Configuration files including database connection setup and JWT configuration.

## Security Considerations:

  - Use of JWT for secure authentication and authorization.
  - Input validation and sanitization to prevent security vulnerabilities.

## Technologies Used
- ## Frontend:
  - React.js 
  - CSS and bootstrap for frontend styling.

- ## Backend:
  - Python for  server-side runtime environment
  - Flask- sqlalchemy for building the RESTful API
  - Flask database using sqlalchemy ORM
  - Authentication:
  - JSON Web Tokens (JWT) for secure authentication
  - flask-bcrypt for password hashing

- ## Deployment:
Render for  deployment

- ## Development Tools:
  - Git for version control
  - GitHub for repository hosting and collaboration
  - VS Code as the preferred IDE


 ## License
The content of this project is licensed under the MIT license
Copyright (c) 2018.







 
        






