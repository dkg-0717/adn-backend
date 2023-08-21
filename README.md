# Backend adn
## Installation

Setup is super easy. Clone the repository - 

```shell script
git clone https://github.com/dkg-0717/adn-backend
npm install
```

Your project is ready. Now start the project.

```shell script for production mode
npm start
```

```shell script for dev mode
npm run dev
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
