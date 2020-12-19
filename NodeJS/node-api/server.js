const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

const uri = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    db: process.env.DB_NAME,
    auth: process.env.DB_AUTH
};

mongoose.connect(
    `mongodb://${uri.user}:${uri.pass}@${uri.host}:${uri.port}/${uri.db}?authSource=${uri.auth}`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);