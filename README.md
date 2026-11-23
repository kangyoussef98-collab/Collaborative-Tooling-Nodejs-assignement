# Collaborative Tooling - Multi-Environment Node.js & MongoDB App

Minimal CRUD REST API built with Express and Mongoose, demonstrating Git Flow branching, Pull Request workflows, and dynamic multi-environment configuration (staging, preprod, prod).

## Project Structure

- config/env/ - Environment templates (.env.*.example)
- config/config.js - Dynamic NODE_ENV loader & validator
- config/db.js - Mongoose connection handler
- src/models/ - Item Mongoose schema
- src/services/ - CRUD business logic
- src/routes/ - Express REST endpoints (/api/items)
- src/app.js - Server entrypoint

## Setup & Running

1. Install dependencies:
   npm install

2. Copy the environment templates and configure MongoDB URIs:
   cp config/env/.env.staging.example config/env/.env.staging
   cp config/env/.env.preprod.example config/env/.env.preprod
   cp config/env/.env.prod.example config/env/.env.prod

3. Run in your target environment:
   npm run start:staging
   npm run start:preprod
   npm run start:prod

## API Endpoints (/api/items)

- POST / - Create an item
- GET / - List all items
- GET /:id - Get item by ID
- PUT /:id - Update item by ID
- DELETE /:id - Delete item by ID
