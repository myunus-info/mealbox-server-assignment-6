# Assignment-6

This is my sixth assignment in the Programming Hero Next Level Web Development course platform. I am very excited to share and describe my project with you.

This is a meal box management application that consists of four collections: One is user collection, another is meal collection, another is meal providers' collection and the other is order collection. The meal collection involves creating, fetching, updating and deleting meal/s operations. The order collection handles order management.

Here is the description of how I have set up my project environment, the technologies I have used, how to run and inspect the project.

## PROJECT SETUP

## Local Environment Setup

- [Git](https://git-scm.com/)
- [Node.js v22.3.0](https://nodejs.org/en/)
- [NPM 10.8.1](https://www.npmjs.com/)
- [MongoDB Driver](https://www.mongodb.com/)
- [Mongoose v8.8.2](https://mongoosejs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Environment Variables for Local Development

> Create a .env file and adjust the following environment variables.

```bash
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.nua1k.mongodb.net/mealbox?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=<bcrypt_salt_round>
JWT_ACCESS_SECRET=<jwt_access_secret>
JWT_REFRESH_SECRET=<jwt_refresh_secret>
JWT_ACCESS_EXPIRES_IN=<jwt_access_expiry_time>
JWT_REFRESH_EXPIRES_IN=<jwt_refresh_expiry_time>
```

> Create a database in MongoDB named nextmart

## NPM SCRIPTS

```bash
$ npm install           # install dependencies
$ npm start             # development build
$ npm run start:prod    # production build
$ npm run start:dev     # start in development mode
$ npm run build         # compile typescript code into javascript
$ npm run lint          # check whether there is any potential error
$ npm run lint:fix      # fix whether there is any potential error
$ npm run prettier      # beautify the unorganized code
$ npm run prettier:fix  # prettier-fix your code
```
