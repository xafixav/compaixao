Here’s a README section for installation instructions with the Docker Compose configuration provided. I’ll use collapsible sections for each part of the setup:

# Installation Instructions

Follow these steps to set up and run the application using Docker Compose.

<details>
<summary>Docker Compose Configuration</summary>

```yml
version: '3.9'
services:
  frontend:
    build: ./frontend
    container_name: app_frontend
    ports:
      - 3000:3000
    depends_on:
      backend:
        condition: service_healthy
    # Os `healthcheck` devem garantir que a aplicação
    # está operacional, antes de liberar o container
    environment:
      - REACT_APP_LOCALHOST=http://localhost:3001
    healthcheck:
      test: ["CMD", "lsof", "-t", "-i:3000"]
      timeout: "10s"
      retries: 5
  backend:
    build: ./backend
    container_name: app_backend
    ports:
      - 3001:3001
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      - PORT=3001
      - DB_USER=postgres
      - DB_PASS=123456
      - DB_HOST=postgres
      - DB_NAME=COMPAIXAO_AQUECE
      - DB_PORT=5432
    healthcheck:
      test: ["CMD", "lsof", "-t", "-i:3001"]
      timeout: "10s"
      retries: 5
  postgres:
      container_name: postgres_container
      image: postgres
      environment:
        POSTGRES_USER: ${POSTGRES_USER:-postgres}
        POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-123456}
        PGDATA: /data/postgres
      healthcheck:
        test: ["CMD", "pg_isready", "-U", "postgres"]
        timeout: "10s"
        retries: 5
      volumes:
        - postgres:/data/postgres
      ports:
        - 3002:5432
      restart: unless-stopped

volumes:
  postgres:
```

</details>

<details>

## Steps to Install and Run

<summary>Local deployment with Docker</summary>

1. **Clone the Repository**

   ```
   git clone <repository-url>
   cd <repository-directory>
   git checkout showcase-project
   ```

2. **Build and Start the Services**

   Run the following command to build the Docker images and start the containers:

   ```
   docker-compose up -d
   ```

3. **Verify Service Status**

   Ensure all services are up and running by checking the logs or accessing the application through your browser:

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:3001](http://localhost:3001)
   - PostgreSQL: Accessible internally by the backend service

4. **Stopping and Removing Containers**

   To stop and remove all containers, networks, and volumes, use:

   ```
   docker-compose down -v
   ```

## Additional Information

- The `frontend` service depends on the `backend`, which in turn depends on `postgres`. Health checks ensure that each service is operational before allowing dependent services to start.
- The `postgres` service uses a named volume for persistent data storage.

Feel free to open issues or contribute improvements as needed.
</details>
<br>

# Application Overview

This README provides an overview of the frontend pages for the application designed to register and manage individuals being assisted.

### **Frontend Overview**

<details><summary>Click to expand the project structure summary</summary>

- **Configuration & Environment**:
  - `.dockerignore`, `.gitignore`: Configuration files for Docker and Git.
  - **`Dockerfile`**: Docker setup file.
  - **`get_files_structure.sh`**: Shell script to generate the project structure.
  - **`package-lock.json`**, **`package.json`**: Node.js package management files.
  - **`README.md`**: Documentation file for the project.

- **Public Directory**:
  - **`public/`**: Public assets and configuration files.
    - `favicon.ico`, `index.html`, `logo192.png`, `logo512.png`, `manifest.json`, `robots.txt`.

- **Source Code**:
  - **`src/`**: Main source code directory.
    - **`.env`**: Environment variables for the frontend.
    - **`App.css`**, **`App.js`**, **`App.test.js`**: Main application files.
    - **`components/`**: React components for the application.
      - `AssistedForms.jsx`, `AssistedInfo.jsx`, `AssistedUpdate.jsx`, `backup.js`, `Header.jsx`.
    - **`hooks/`**: Custom React hooks.
      - `useFetchAllAssisted.js`, `useTodayAssisteds.js`.
    - **`index.css`**, **`index.js`**: Entry point and global styles.
    - **`logo.svg`**: Logo file.
    - **`reportWebVitals.js`**: Web Vitals report script.
    - **`services/`**: Context and service files.
      - `AssistedContext.js`, `defaultState.js`, `requests.js`.
    - **`setupTests.js`**: Test setup file.
    - **`styles/`**: CSS stylesheets for various components.
      - `AssistedForms.css`, `Formulary.css`, `Header.css`, `PersonCard.css`.

- **Project Structure**:
  - **`project_structure.txt`**: A text file that lists the structure of the project.

</details>

<details>
<summary>Frontend Overview</summary>

## Frontend Overview

The frontend of the application is designed to facilitate the registration and management of individuals who are being assisted. It includes two main pages:

### 1. Register Page

The **Register Page** allows users to enter details about a person being assisted. The form includes the following fields:

- **ID**: Automatically assigned unique identifier.
- **Name**: Full name of the person.
- **Assisted Number**: Bracelet mark number (to help identify the person).
- **Born Age**: Birthdate in DD/MM/YYYY format.
- **Born City**: City of birth.
- **Born State**: State of birth.
- **Job Profession**: Current or previous job profession.
- **Gender**: Options are Male, Female, or Other (to be specified in comments if needed).
- **Shoes Number**: Shoe size.
- **Legs Number**: Measurement for clothing fitting.
- **Shirt Number**: Shirt size.
- **CPF**: Brazilian individual taxpayer registry number.
- **Sleep Over**: Boolean indicating if the person will sleep at a shelter.
- **Living State**: Current living situation (e.g., street, shelter).
- **Prayer**: Field for entering a prayer, which will be stored in the comments' `prayer` field.

### 2. Associated Page

The **Associated Page** displays a list of all registered individuals with their details. This page retrieves and displays information in the following format:

- **ID**: Unique identifier.
- **Name**: Full name.
- **Assisted Number**: Bracelet mark number.
- **Born Age**: Birthdate.
- **Born City**: City of birth.
- **Born State**: State of birth.
- **Job Profession**: Job information.
- **Gender**: Gender (Male, Female, Other).
- **Shoes Number**: Shoe size.
- **Legs Number**: Clothing measurement.
- **Shirt Number**: Shirt size.
- **CPF**: CPF number.
- **Sleep Over**: Boolean indicating sleep-in status.
- **Living State**: Current living condition.
- **Created At / Updated At**: Timestamps.
- **Comments**: Includes a `prayer` field from the comments' `prayer` field.

The frontend should be user-friendly and include validation to ensure all required fields are correctly filled out before submission. The design should also ensure that the display of information is clear and accessible for all users.

</details>

<details>
<summary>Frontend Libraries and Hooks</summary>

## Frontend Libraries and Hooks

### Libraries Used

1. **React**: The primary library for building user interfaces.
   - **`useEffect`**: React hook used for side effects, such as fetching data when the component mounts.

2. **React Router**: Used for handling routing in the application.
   - **`Router`**: Component that provides the routing context for the app.
   - **`Routes`**: Component that contains all the route definitions.
   - **`Route`**: Defines a path and the component to render when the path matches.

### Custom Hooks

1. **`useAllAssisted`**: A custom hook that likely manages state and provides functions for fetching and updating all assisted records.
   - **`update`**: State or function to trigger updates.
   - **`assisteds`**: State holding the list of all assisted individuals.
   - **`fetchAssisted`**: Function to fetch all assisted individuals.
   - **`setUpdate`**: Function to update the state related to assisted individuals.

2. **`useTodayAssisteds`**: A custom hook for managing state and fetching today's assisted records.
   - **`updateToday`**: State or function for updates related to today's records.
   - **`assistedsToday`**: State holding the list of assisted individuals for today.
   - **`fetchAssistedToday`**: Function to fetch today's assisted individuals.
   - **`setUpdateToday`**: Function to update the state related to today's records.

### Context

- **`AssistedContext`**: React context used to provide and consume state and functions across components related to assisted individuals.

### Components

1. **`Header`**: Component that likely contains the navigation or header content.
2. **`AssistedForms`**: Component for the form to register or manage assisted individuals.
3. **`AssistedInfo`**: Component for displaying information about all assisted individuals.
4. **`AssistedUpdate`**: Component for updating the details of a specific assisted individual.

</details>

### **Backend Overview**

<details><summary>Click to expand the project structure summary</summary>

- **Configuration & Environment**:
  - `.dockerignore`, `.env`, `.eslintrc.js`, `.gitignore`, `.sequelizerc`: Configuration files for Docker, environment variables, ESLint, Git, and Sequelize.

- **Build & Deployment**:
  - **`Dockerfile`**: Docker setup file.
  - **`dist/`**: Compiled or built files for deployment (`server.js`).
  - **`tsconfig.json`**: TypeScript configuration file.
  - **`get_files_structure.sh`**, **`tsc_eval.sh`**: Shell scripts for various tasks.

- **Source Code**:
  - **`src/`**: Main source code directory.
    - **`app.ts`**: Main application file.
    - **`controller/`**: Handles request logic.
      - **`assisted/`, `comentary/`, `inventory/`, `relationalInventory/`**: Subdirectories for handling different functionalities.
    - **`database/`**: Database configurations, models, migrations, and seeders.
      - **`config/`**: Configuration settings for the database.
      - **`models/`**: ORM models.
      - **`migrations/`**, **`seeders/`**: For database schema migrations and data seeding.
    - **`interfaces/`**: TypeScript interfaces.
    - **`middleware/`**: Middleware logic for the application.
    - **`routes/`**: Route definitions for different endpoints.
    - **`service/`**: Business logic services.
      - **`assisted/`, `comentary/`, `inventory/`, `relationalInventory/`, `users/`**: Each folder corresponds to different parts of the application.
    - **`server.ts`**: Server configuration and startup.

- **Public Directory**:
  - **`public/`**: Publicly accessible files and JavaScript source maps.
  - **`project_structure.txt`**: A text file that lists the structure of the project.

</details>

<details>
<summary>Backend Overview</summary>

## Routes

### Assisted Routes

- **Register a New Assisted**
  - **POST** `/assisted/register`
  - **Description**: Registers a new person in need.

- **Get All Assisted**
  - **GET** `/assisted/getall`
  - **Description**: Retrieves a list of all registered people.

- **Update Assisted Information**
  - **POST** `/assisted/update`
  - **Description**: Updates the information of a registered person.

### Comentary Routes

- **Create New Comentary**
  - **POST** `/assisted/comentary/register`
  - **Description**: Creates a new commentary related to a person.

- **Get All Comentaries for a Person**
  - **GET** `/assisted/comentary/:id`
  - **Description**: Retrieves all commentaries for a specific person by ID.

- **Update Comentary**
  - **POST** `/assisted/comentary/update`
  - **Description**: Updates a specific commentary.

### Inventory Routes (Future Use)

- **Register New Inventory**
  - **POST** `/inventory/register`
  - **Description**: Registers a new inventory item. Validation and creation handled.

- **Get All Inventory Items**
  - **GET** `/inventory/getall`
  - **Description**: Retrieves a list of all inventory items.

- **Update Inventory Item**
  - **GET** `/inventory/update`
  - **Description**: Updates an inventory item. Validation and update handled.

### Relational Inventory Routes (Future Use)

- **Create New Relational Inventory**
  - **POST** `/inventory/relational/create`
  - **Description**: Creates a new relational inventory item. Validation and creation handled.

- **Get All Relational Inventory Items**
  - **GET** `/inventory/relational/getall`
  - **Description**: Retrieves a list of all relational inventory items.

- **Update Relational Inventory Item**
  - **POST** `/inventory/relational/update`
  - **Description**: Updates a relational inventory item. Validation and update handled.

## Summary

The backend provides routes for managing people in need (assisted), their associated commentaries, and future functionality for handling inventory and relational inventory items. The routes cover creation, retrieval, and updating operations for these entities. The frontend routes currently focus on the basic CRUD operations for assisted persons and commentaries, with additional routes planned for inventory management.


<details>
<summary>Joi Schema Overview</summary>

## Joi Schema Overview

### Example Schema

Joi is used to validate the structure and types of data. For instance:

```typescript
import Joi from 'joi';
import ERROR_MESSAGES from '../ErrorMessages';
import { StatusCodes } from 'http-status-codes';

export default class ExampleSchema {

  public static defaultSchema = Joi.object({
    assistedNumber: Joi.number().min(1).required().messages({
      'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_ID_MISSING}`,
      'number.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_ID_MISSING}`,
    }),
    name: Joi.string().min(1).required().messages({
      'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_NAME_MISSING}`,
      'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_NAME_MISSING}`,
    }),
    // Other fields...
  });
}
```

### Error Messages

Error messages are standardized for consistency:

```typescript
const ERROR_MESSAGES = {
  ASSISTED_ID_MISSING: 'Numero de pulseira não informada',
  ASSISTED_NAME_MISSING: 'Nome do assistenciado não informada',
  // Other messages...
};
```

</details>

</details>


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.