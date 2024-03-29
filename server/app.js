const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const { sanitize } = require('express-mongo-sanitize');

// Import routes
const adminCategoryRoute = require('./routes/admin/categoryRoute');
const adminSiteSettingRoute = require('./routes/admin/settingRoute');
const adminPostRoute = require('./routes/admin/postRoute');
const userCategoryRoute = require('./routes/user/categoryRoute');
const userPostRoute = require('./routes/user/postRoute');
const userSiteSettingRoute = require('./routes/user/settingRoute');
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

app.all('*', (req, res, next) => {
    req.body = sanitize(req.body)
    req.headers = sanitize(req.headers)
    req.params = sanitize(req.params)
  
    next();
  });


// Routes
app.use('/api/admin', adminCategoryRoute);
app.use('/api/admin', adminSiteSettingRoute);
app.use('/api/admin', adminPostRoute);
app.use('/api/user', userSiteSettingRoute);
app.use('/api/user', userCategoryRoute);
app.use('/api/user', userPostRoute);

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server is running on port ${port}`));