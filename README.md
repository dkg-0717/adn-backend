# Backend adn
## Installation

Setup is super easy. Clone the repository - 

```shell script
git clone https://github.com/dkg-0717/adn-backend
npm install
```

Create an ``.env`` file at the root of your project with the following.  

```dotenv
MONGO_URL=YOUR_MONGO_URL
PORT=5000[YOUR_DESIRED_PORT]
NODE_ENV=YOUR_APP_ENVIRONMENT[production/development]
JWT_SECRET=YOUR_JWT_SECRET_STRING
```

An example file `.env.example` is included.

Your project is ready. Now start the project.

```shell script
npm start
```

Go to ``http://localhost:3000``. You should see a default welcome page.

Your API base path is ``http://localhost:3000/mutation``.

# API

### Mutation
POST  http://localhost:3000/mutation

```js
{
    "dna":[
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
    ]
}

### Mutation
GET  http://localhost:3000/stats
