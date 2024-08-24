# Request Header Parser Microservice

## Overview

The Request Header Parser Micorservice a simple Express.js application that retrieves and returns the client's IP address, preferred language, and software details based on their GET request. This API is designed to demonstrate how to extract and utilize request headers to gather client information. The project also serves static files and includes a basic CORS configuration.

## Features

- IP Address Retrieval: Automatically detects and returns the client's IP address.
- Language Detection: Extracts the client's preferred language from the Accept-Language header.
- Software Information: Gathers details about the client's browser and operating system from the User-Agent header.
- CORS Support: Configured to handle cross-origin requests.
- Static File Serving: Serves static content like HTML files.
- Environment Configuration: Utilizes environment variables for configuration, making it adaptable to different environments.

## Endpoints

### GET /

Serves the index.html file located in the /public directory. This is the main landing page of the API.

### GET /api/whoami

Returns a JSON object containing the client's IP address, language, and software information.

- Response Example:
   {
    "ipaddress": "127.0.0.1",
    "language": "en-US,en;q=0.9",
    "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  }
  
### GET /api/hello

Returns a simple greeting message in JSON format.

- Response Example:
   {
    "greeting": "hello API"
  }
  
## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. Clone the repository:
```
git clone https://github.com/OB-Adams/header-parser-microservice.git
cd header-parser-microservice
```
   
2. Install dependencies:
```
npm install
```
   
3. Create a `.env` file in the root directory and specify the port:
```
PORT=3000
```
   
### Running the Application

Start the server with the following command:
```
npm start
```

Alternatively, you can use nodemon for live reloading during development:
```
npx nodemon server.js
```

The server will start on the port specified in the .env file, or default to port 3000 if not specified.

### Accessing the API

- Home Page: Visit http://localhost:3000/ to see the static content.
- Client Info: Visit http://localhost:3000/api/whoami to get the client's information.
- Greeting: Visit http://localhost:3000/api/hello to get a greeting message.

## Project Structure
├── public
│   └── index.html  # Main landing page
├── .env            # Environment configuration
├── server.js       # Main server file
├── package.json    # Project dependencies and scripts
└── README.md       # Project documentation

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- CORS: Provides a middleware to enable CORS with various options.
- dotenv: Loads environment variables from a .env file into process.env.

## Environment Variables

The project uses the following environment variables:

- PORT: The port number on which the server will listen. Defaults to 3000 if not specified.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)
- [CORS Documentation](https://www.npmjs.com/package/cors)