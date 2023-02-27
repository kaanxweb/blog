const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.set('strictQuery', false);

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log('Database connection established.'))
.catch(console.error);

module.exports = mongoose.connection;