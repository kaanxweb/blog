const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// Import .env file
require('./.env');
// Import database connection
require('./database-connection');


app.use(helmet());
app.use(
    cors({
        origin: true,
        credentials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('Server is working!')
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server is running on port ${port}`));