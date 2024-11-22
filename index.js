const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./Routes/bfhl.js');
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: 'https://67408044d1097e916070b05a--profound-gingersnap-24916f.netlify.app', // Allow only the frontend domain
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  };
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', bfhlRoutes);

// Server Listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
