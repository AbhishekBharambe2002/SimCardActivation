## Features

- Add new SIM cards with a unique SIM number and associated phone number.
- Activate SIM cards for use.
- Check the activation status of any SIM card.
- Delete SIM cards from the system.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose) and MySQL (using Sequelize)
- **Environment Variables**: dotenv
- **CORS**: Enabled for cross-origin resource sharing
- **Frontend**: React.js

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- MongoDB and/or MySQL database set up.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/SIM-Card-Activation-System.git
   cd SIM-Card-Activation-System
Navigate to the backend directory:

bash
Copy code
cd backend
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the root of the backend directory with the following content:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000
If using MySQL, add the necessary environment variables for your database configuration.

Usage
Start the backend server:

bash
Copy code
npm start
Navigate to the frontend directory and install its dependencies:

bash
Copy code
cd ../frontend
npm install
Start the frontend application:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to access the application.

API Endpoints
POST /api/add-sim

Add a new SIM card.
Request body: { "simNumber": "string", "phoneNumber": "string" }
POST /api/activate-sim

Activate a SIM card.
Request body: { "simNumber": "string" }
POST /api/check-sim-activation

Check the activation status of a SIM card.
Request body: { "simNumber": "string" }
DELETE /api/delete-sim

Delete a SIM card.
Request body: { "simNumber": "string" }
