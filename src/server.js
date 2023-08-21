const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

const dnaRouter = require('./routes/dna');

app.use(dnaRouter);

// Manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



