import express from 'express';
import { connectDB } from '../src/config/mongoDB.js'
import app from './app.js';

const PORT = 8080;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log('Listening on port :' + PORT);
    });
}

startServer();