# Tasks List App

## Overview
**Tasks List App** is a full-stack application that allows users to manage tasks efficiently. It features a React frontend, an Express backend, and DynamoDB for persistent data storage. The app is hosted on AWS Amplify, offering a seamless and responsive task management experience.

**Live Demo**: [Tasks List App](https://main.d262iex0lid9n6.amplifyapp.com)  

---

## Features
- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Responsive Design**: Built with Material UI for a modern and accessible interface.
- **AWS Integration**:
  - **DynamoDB**: NoSQL database for reliable data storage.
  - **Lambda**: Serverless backend functions.
  - **Amplify**: Hosting and deployment.
- **Full-Stack Implementation**: 
  - React frontend.
  - Express backend with RESTful APIs.
- **Monorepo Structure**: Organized directories for UI (`frontend`) and API (`api`) components.

---

## Technologies Used
- **Frontend**: React, Material UI
- **Backend**: Node.js, Express.js
- **Database**: AWS DynamoDB
- **Serverless**: AWS Lambda
- **Hosting**: AWS Amplify

---

## Getting Started

### Prerequisites
- Node.js installed on your machine
- AWS account with DynamoDB set up

## Installation and Setup

### 1. Clone the Repository
    ```bash
    git clone https://github.com/rachelyperezdev/tasks-list.git
    cd tasks-list

### 2. Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
    cd frontend
2. Install dependencies:
   ```bash
    npm install
3. Start the React application in development mode:
   ```bash
    npm run dev

### 3. Backend Setup
1. Open a new terminal and navigate to the api directory:
   ```bash
    cd api
2. Install dependencies:
   ```bash
    npm install
3. Configure API URL
   Update the API_URL variable in the utility file within the frontend directory to point to your deployed API or http://localhost:3001 during local development.
4. Start the backend server
   ```bash
    npm run dev

### Deployment
This app is deployed using AWS Amplify for the frontend and AWS Lambda for serverless backend functions. Ensure that:
1. Your DynamoDB is configured with the appropriate tables.
2. Your Amplify app is set up to host the React application.
