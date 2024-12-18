const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./Routes/bfhl.js');
const cors = require("cors");
if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

const app = express();

const corsOptions = {
  origin: [
    "https://tangerine-crumble-56a0fe.netlify.app/", // Frontend Netlify domain
  ],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};
app.use(cors(corsOptions));

// app.options('*', cors(corsOptions)); 
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/bfhl', bfhlRoutes);

// Server Listener
const PORT =  8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
