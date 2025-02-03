# HNG12 Stage 0- Public API

## Project overview
This is a public api that returns the following information in JSON format
-Registered email address used to register on the HNG12 Slack workspace
-The current datetime as an ISO 8601 formatted timestamp
- The Github URL of the project codebase

## API documentation
The API is built with Node.js and Express.js and is deployed on Render.

### API Endpoint
1. GET / (https://josh-hng-stage0.onrender.com/)
URL: https://josh-hng-stage0.onrender.com/
Method: GET
Response Format: JSON
CORS: Enabled (Allows cross-origin requests)

Response example
{
  "email": "oluwoleolusegun14@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}

Technologies Used
-Backend: Node.js, Express.js
-Hosting: Render
-Version Control: Git & GitHub

Resources
Learn more about Node.js: https://hng.tech/hire/nodejs-developers