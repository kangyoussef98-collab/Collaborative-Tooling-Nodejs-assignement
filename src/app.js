const express = require('express');
const config = require('../config/config');
const connectDB = require('../config/db');
const itemRoutes = require('./routes/item.routes');

const app = express();
app.use(express.json());
app.use('/api/items', itemRoutes);

connectDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`[${config.env}] Server running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error('Startup failed:', err.message);
    process.exit(1);
  });
