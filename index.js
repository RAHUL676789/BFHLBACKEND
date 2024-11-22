const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./Routes/bfhl.js');
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: [
    "https://67408044d1097e916070b05a--profound-gingersnap-24916f.netlify.app", // Frontend Netlify domain
  ],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};
app.use(cors(corsOptions));
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/bfhl', bfhlRoutes);

// Server Listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
