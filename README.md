# Miminal Serverless App

## About the Project

This project uses a create react app client, serverless AWS Lambda functions, built and deployed from the same github repository with Netlify and persisting data to a MongoDB Altas cloud database instance.

## Getting Started

You will need to have a MongoDB account before getting started. Log in or create an account, create a new project at `cloud.mongodb.com`, and build a cluster choosing any provider and free tier.

You will need to add two environment variables to run the project, a database connection string and an app secret used for making and validating json webtokens for authentication.

### Prerequisites

In order to add MongoDB to the project, you need to do:

1. Create a MongoDB Atlas project and cluser
2. Create a user with database access
3. Allow database access by whitelisting you IP address
4. Get the connection string, and add as environment variable.

#### 1. Create a MongoDB Atlas project and cluster

From the MongoDB dashboard, create a new project. Then chose "Build a New Cluser" inside that project. Choose any provider / region and a free tier.

#### 2. Create a user with database access

Navigate to "security / database access" and "add a new user" Enter a user name and password. Remember this password. It will be used later in the connection string.

#### 3. Allow database access by whitelisting your IP

Navigate to "security / Network Access" and "ADD IP ADDRESS"

#### 4. Get MongoDB connection string

Inside the dashboard sandbox, choose "connect" and then "Connect your Application"

This project exposes the database connection string as `process.env.REACT_APP_DB_URL`

The environment variable will have a key of `REACT_APP_DB_URL` and a value of `<YOUR:CONNECTION:STRING:WITH:USER:PASSWORD>`

### Installation

Download or clone the project locally.

#### Run the project locally

From the root, run the project with this command:

`REACT_APP_DB_URL="<YOUR:CONNECTION:STRING:WITH:USER:PASSWORD>" REACT_APP_APP_SECRET="<YOUR:APP:SECRET>" netlify dev`

This should build the react app and the lambda functions, serving both the client and functions on `http://localhost:8888`

The functions enpoints are available as `/.netlify/functions/FILE_NAME`, so we can test the `hello.js` function by going to `http://localhost:8888/.netlify/functions/hello`

#### Deploy project to production

TODO

## Usage

TODO
