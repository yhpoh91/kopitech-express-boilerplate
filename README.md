# Kopitech Express Boilerplate
This boilerplate is serve to help kickstart a new node.js express server application with the following features:

- Logging
- Inversion of Control (using Container)
- Route with Validation (using Joi) and Controller
- Database Support (with MongoDB using Mongoose)
- Simple Error Handling on Route Error
- Support for Building into ES5 using babel
- Lint
- Dotenv

# Installation
Install required softwares: `nodejs`, `npm`, `git`

Clone this repo:
```
$ git clone git@github.com:yhpoh91/kopitech-express-boilerplate.git
```
Install required dependencies: 
```
npm install
```

Build production server (babel transpile)
```
npm run build
```

# Starting the Server
#### Production
The built production server can be started by running `npm start`.

#### Development
The development version of the server that uses `babel-node` can be started by running `npm run dev`.
This server will run with nodemon, meaning that any changes to the server code will trigger a restart automatically on save.
