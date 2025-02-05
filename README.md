# HNG12 Stage 1- Number Classification API

## API documentation

The API is built with Node.js and Express.js and is deployed on Render.

### API Endpoint

1. Request
   Method: GET
   URL: http://josh-hng-stage1.onrender.com/api/classify-number
   Response Format: JSON
   CORS: Enabled (Allows cross-origin requests)

Query Parameters  
number: The number to be classified.

Response
The response will contain the classification result based on the provided number.
The response will be in JSON format and will contain the classification result based on the provided number. The response body will include the following properties:
num (number): The classified number.
is_prime (boolean): Indicates if the number is prime.
is_perfect (boolean): Indicates if the number is perfect.
properties (array): An array of additional properties of the number whcih are armstrong, odd and even
digit_sum (number): The sum of the digits of the number.
fun_fact (string): An interesting fact about the number.

The response will also include the following headers:
Status: 200
Content-Type: application/json

Response example
{
"num": 371,
"is_prime": false,
"is_perfect": false,
"properties": [
"armstrong",
"odd"
],
"digit_sum": 11,
"fun_fact": "371 is a narcissistic number."
}

Technologies Used
-Backend: Node.js, Express.js
-Hosting: Render
-Version Control: Git & GitHub

Resources
Learn more about Node.js: https://hng.tech/hire/nodejs-developers
