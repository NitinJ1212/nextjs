// server/server.js
require('dotenv').config({ path: '../.env' });

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Routes
// const connectMongo = require('./mongo');
// connectMongo();
app.use('/api/users', userRoutes);

// Use env port or fallback
const PORT = process.env.BACKEND_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
