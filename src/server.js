const express = require('express');
const app = express();
const cors = require('cors')

require('./config/database');
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(require('./routes/index'))

// Manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



