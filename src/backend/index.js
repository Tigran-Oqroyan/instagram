const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require('./user.route.js');

// Main
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type']
}));

app.get('/', (request, response) => {
    response.send("Hello from backend");
});

app.use('/api/users', userRoute);

// Database connection

const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/Users')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
