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







 
        





Fork and clone this lesson for a template for your full-stack application. Take
a look at the directory structure before we begin (NOTE: node_modules will be
generated in a subsequent step):

```console
$ tree -L 2
$ # the -L argument limits the depth at which we look into the directory structure
.
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── README.md
├── client
│   ├── README.md
│   ├── package.json
│   ├── public
│   └── src
└── server
    ├── app.py
    ├── config.py
    ├── models.py
    └── seed.py
```

A `migrations` folder will be added to the `server` directory in a later step.

The `client` folder contains a basic React application, while the `server`
folder contains a basic Flask application. You will adapt both folders to
implement the code for your project .

NOTE: If you did not previously install `tree` in your environment setup, MacOS
users can install this with the command `brew install tree`. WSL and Linux users
can run `sudo apt-get install tree` to download it as well.

## Where Do I Start?

Just as with your Phase 3 Project, this will likely be one of the biggest
projects you've undertaken so far. Your first task should be creating a Git
repository to keep track of your work and roll back any undesired changes.

### Removing Existing Git Configuration

If you're using this template, start off by removing the existing metadata for
Github and Canvas. Run the following command to carry this out:

```console
$ rm -rf .git .canvas
```

The `rm` command removes files from your computer's memory. The `-r` flag tells
the console to remove _recursively_, which allows the command to remove
directories and the files within them. `-f` removes them permanently.

`.git` contains this directory's configuration to track changes and push to
Github (you want to track and push _your own_ changes instead), and `.canvas`
contains the metadata to create a Canvas page from your Git repo. You don't have
the permissions to edit our Canvas course, so it's not worth keeping around.

### Creating Your Own Git Repo

First things first- rename this directory! Once you have an idea for a name,
move one level up with `cd ..` and run
`mv python-p4-project-template <new-directory-name>` to change its name (replace
<new-directory-name> with an appropriate project directory name).

> **Note: If you typed the `mv` command in a terminal within VS Code, you should
> close VS Code then reopen it.**

> **Note: `mv` actually stands for "move", but your computer interprets this
> rename as a move from a directory with the old name to a directory with a new
> name.**

`cd` back into your new directory and run `git init` to create a local git
repository. Add all of your local files to version control with `git add --all`,
then commit them with `git commit -m'initial commit'`. (You can change the
message here- this one is just a common choice.)

Navigate to [GitHub](https://github.com). In the upper-right corner of the page,
click on the "+" dropdown menu, then select "New repository". Enter the name of
your local repo, choose whether you would like it to be public or private, make
sure "Initialize this repository with a README" is unchecked (you already have
one), then click "Create repository".

Head back to the command line and enter
`git remote add origin git@github.com:github-username/new-repository-name.git`.
NOTE: Replace `github-username` with your github username, and
`new-repository-name` with the name of your new repository. This command will
map the remote repository to your local repository. Finally, push your first
commit with `git push -u origin main`.

Your project is now version-controlled locally and online. This will allow you
to create different versions of your project and pick up your work on a
different machine if the need arises.

---

## Setup

### `server/`

The `server/` directory contains all of your backend code.

`app.py` is your Flask application. You'll want to use Flask to build a simple
API backend like we have in previous modules. You should use Flask-RESTful for
your routes. You should be familiar with `models.py` and `seed.py` by now, but
remember that you will need to use Flask-SQLAlchemy, Flask-Migrate, and
SQLAlchemy-Serializer instead of SQLAlchemy and Alembic in your models.

The project contains a default `Pipfile` with some basic dependencies. You may
adapt the `Pipfile` if there are additional dependencies you want to add for
your project.

To download the dependencies for the backend server, run:

```console
pipenv install
pipenv shell
```

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:

```console
python server/app.py
```

Check that your server serves the default route `http://localhost:5555`. You
should see a web page with the heading "Project Server".

### `client/`

The `client/` directory contains all of your frontend code. The file
`package.json` has been configured with common React application dependencies,
include `react-router-dom`. The file also sets the `proxy` field to forward
requests to `"http://localhost:5555". Feel free to change this to another port-
just remember to configure your Flask app to use another port as well!

To download the dependencies for the frontend client, run:

```console
npm install --prefix client
```

You can run your React app on [`localhost:3000`](http://localhost:3000) by
running:

```sh
npm start --prefix client
```

Check that your the React client displays a default page
`http://localhost:3000`. You should see a web page with the heading "Project
Client".

## Generating Your Database

NOTE: The initial project directory structure does not contain the `instance` or
`migrations` folders. Change into the `server` directory:

```console
cd server
```

Then enter the commands to create the `instance` and `migrations` folders and
the database `app.db` file:

```
flask db init
flask db upgrade head
```

Type `tree -L 2` within the `server` folder to confirm the new directory
structure:

```console
.
├── app.py
├── config.py
├── instance
│   └── app.db
├── migrations
│   ├── README
│   ├── __pycache__
│   ├── alembic.ini
│   ├── env.py
│   ├── script.py.mako
│   └── versions
├── models.py
└── seed.py
```

Edit `models.py` and start creating your models. Import your models as needed in
other modules, i.e. `from models import ...`.

Remember to regularly run
`flask db revision --autogenerate -m'<descriptive message>'`, replacing
`<descriptive message>` with an appropriate message, and `flask db upgrade head`
to track your modifications to the database and create checkpoints in case you
ever need to roll those modifications back.

> **Tip: It's always a good idea to start with an empty revision! This allows
> you to roll all the way back while still holding onto your database. You can
> create this empty revision with `flask db revision -m'Create DB'`.**

If you want to seed your database, now would be a great time to write out your
`seed.py` script and run it to generate some test data. Faker has been included
in the Pipfile if you'd like to use that library.

---

#### `config.py`

When developing a large Python application, you might run into a common issue:
_circular imports_. A circular import occurs when two modules import from one
another, such as `app.py` and `models.py`. When you create a circular import and
attempt to run your app, you'll see the following error:

```console
ImportError: cannot import name
```

If you're going to need an object in multiple modules like `app` or `db`,
creating a _third_ module to instantiate these objects can save you a great deal
of circular grief. Here's a good start to a Flask config file (you may need more
if you intend to include features like authentication and passwords):

```py
# Standard library imports

# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

# Local imports

# Instantiate app, set attributes
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)

```

Now let's review that last line...

#### CORS

CORS (Cross-Origin Resource Sharing) is a system that uses HTTP headers to
determine whether resources from different servers-of-origin can be accessed. If
you're using the fetch API to connect your frontend to your Flask backend, you
need to configure CORS on your Flask application instance. Lucky for us, that
only takes one line:

```py
CORS(app)

```

By default, Flask-CORS enables CORS on all routes in your application with all
fetching servers. You can also specify the resources that allow CORS. The
following specifies that routes beginning with `api/` allow CORS from any
originating server:

```py
CORS(app, resources={r"/api/*": {"origins": "*"}})

```

You can also set this up resource-by-resource by importing and using the
`@cross_origin` decorator:

```py
@app.route("/")
@cross_origin()
def howdy():
  return "Howdy partner!"

```

---

## Updating Your README.md

`README.md` is a Markdown file that describes your project. These files can be
used in many different ways- you may have noticed that we use them to generate
entire Canvas lessons- but they're most commonly used as homepages for online
Git repositories. **When you develop something that you want other people to
use, you need to have a README.**

Markdown is not a language that we cover in Flatiron's Software Engineering
curriculum, but it's not a particularly difficult language to learn (if you've
ever left a comment on Reddit, you might already know the basics). Refer to the
cheat sheet in this lesson's resources for a basic guide to Markdown.

### What Goes into a README?

This README should serve as a template for your own- go through the important
files in your project and describe what they do. Each file that you edit (you
can ignore your migration files) should get at least a paragraph. Each function
should get a small blurb.

You should descibe your application first, and with a good level of detail. The
rest should be ordered by importance to the user. (Probably routes next, then
models.)

Screenshots and links to resources that you used throughout are also useful to
users and collaborators, but a little more syntactically complicated. Only add
these in if you're feeling comfortable with Markdown.

---

## Conclusion

A lot of work goes into a full-stack application, but it all relies on concepts
that you've practiced thoroughly throughout this phase. Hopefully this template
and guide will get you off to a good start with your Phase 4 Project.

Happy coding!

---

## Resources

- [Setting up a respository - Atlassian](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
- [Create a repo- GitHub Docs](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [Python Circular Imports - StackAbuse](https://stackabuse.com/python-circular-imports/)
- [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/)
