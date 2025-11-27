// index.js
const express = require('express');
const cors = require('cors');
const appConfig = require('./config/appConfig');
const employeeRoutes = require('./routes/employeeRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

// base routes
app.use('/api', employeeRoutes);

// health
app.get('/', (req, res) => res.json({ status: 'ok', message: 'Express file-based API' }));

// error handler
app.use(errorHandler);

const PORT = appConfig.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
