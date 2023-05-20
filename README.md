# Express Boilerplate

A boilerplate project for quickly setting up an Express.js application with common dependencies and useful scripts.

## Features

- Ready-to-use Express.js setup
- Logging using Morgan middleware
- Environment variable management with dotenv
- Automatic server restart during development using Nodemon
- Debugging support with Inspect
- Code formatting using Prettier

## Prerequisites

- Node.js (version 14.X.X or higher)
- npm (version 6.X.X or higher)

## Getting Started

1. Clone the repository:
 - `git clone https://github.com/haiderRizvii/express-boilerplate.git`
2. Navigate to the project directory:
 - `cd express-boilerplate`
3. Install the dependencies:
- `npm install`
4. Start the development server:
- `npm run dev`
5. Open your web browser and visit `http://localhost:5000` to see the application in action.

## Available Scripts

- `npm run start`: Starts the production server.
- `npm run dev`: Starts the development server using Nodemon for automatic restart on file changes.
- `npm run dev debug`: Starts the development server with debugging support using Inspect.
- `npm run format`: Formats the code using Prettier.

## Configuration

- Environment variables can be set in a `./config/config.env` file in the project root directory
