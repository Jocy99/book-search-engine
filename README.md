# Google Books API Search Engine

## Overview

This project is a fully functioning book search engine that leverages the Google Books API. Originally built as a RESTful API using the MERN stack (MongoDB, Express.js, React, and Node.js), it has been refactored to utilize GraphQL with Apollo Server for enhanced performance and flexibility.

## Features

- **Google Books API Integration**: Search and retrieve book information from the Google Books API.
- **React Front End**: A user-friendly interface for interacting with the book search engine.
- **MongoDB Database**: Stores user-saved book searches and related information.
- **Node.js/Express.js Server**: Manages the server-side logic and communication with the database.
- **RESTful API (Original)**: Legacy RESTful API for book search functionality (kept for reference).
- **GraphQL API (Refactored)**: Improved API using GraphQL and Apollo Server, providing a more efficient and powerful query system.

## Deployment
 Here is the link to my deployed website: https://mysupercoolbooksearchengine-2766b913b12f.herokuapp.com/
![Screenshot (212)](https://github.com/Jocy99/book-search-engine/assets/133434768/dd72dac7-e203-4e4d-9871-d52099edb50f)
 
## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or a local MongoDB server)
- Google Books API Key (create one [here](https://developers.google.com/books/docs/v1/using#APIKey))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Jocy99/book-search-engine.git
cd books-search-engine
```

2. Install dependencies for the server and client:

```bash
cd server
npm install

cd ../client
npm install
```

3. Configure the application:

   - Create a `.env` file in the `server` directory and add the following:

     ```env
     MONGODB_URI=your_mongodb_uri
     GOOGLE_BOOKS_API_KEY=your_google_books_api_key
     ```

4. Start the server and client:

   - In the `server` directory:

     ```bash
     npm start
     ```

   - In the `client` directory:

     ```bash
     npm start
     ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the search bar to enter book queries.
3. View the search results, including book details and a link to the Google Books page.
4. Save books to your collection by clicking the "Save" button.
5. Access your saved books from the navigation menu.

## RESTful API (Legacy)

The original RESTful API is available for reference at `http://localhost:3001/api`.

## GraphQL API

The refactored GraphQL API is accessible at `http://localhost:3001/graphql`.

### GraphQL Playground

Visit `http://localhost:3001/graphql` in your browser to access the GraphQL Playground. Here, you can explore and interact with the GraphQL schema.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
