<div align="center">

An example of Node.js API using ES6 syntax.

![dependencies](https://img.shields.io/david/bangunbagustapa/node-mongo-api-example?style=flat-square) ![dev dependencies](https://img.shields.io/david/dev/bangunbagustapa/node-mongo-api-example?style=flat-square)

</div>

## About

The main purpose of this repository is to show and setup a new Node.js API project in ES6 syntax.

It is not a goal to be a comprehensive kit to making a Node.js API project, but this repository will be maintained.

## Folder structure

```
node-mongo-api-example
└── src                 # App codebase
    ├── bin             # Define various startup scripts
    ├── config          # Configuration
    ├── controllers     # Controllers for handling routes
    ├── models          # Database schema
    └── routes          # Web routes
```

## Dependencies

Here is a list of all dependencies:

- Express: Web framework for Node.js
- Mongoose: ODM library for database.
- Babel: Convert the ES6 code to ES5 code.
- ESLint: Find and fix problems in JavaScript code using airbnb-base.
- Husky: Lint commit messages with lint-staged.

## Getting started

#### Download

Download the code by cloning the repository:

```
git clone https://github.com/bangunbagustapa/node-mongo-api-example.git <project_name>
```

#### Install

Install all the dependencies:

```
npm install
```

#### Configuration

Put your credential in `.env.example`:

```
MONGO_URI=
```

and rename `.env.example` file to `.env`

#### Start application

Running the app locally:

```
npm run dev
```