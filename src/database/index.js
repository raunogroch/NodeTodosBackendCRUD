const mongoose = require('mongoose')
const db = mongoose.connection

const databaseURLProduction = process.env.DATABASE
const URI = databaseURLProduction ? databaseURLProduction : 'mongodb://localhost:27017/Todo'

const connect = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    db.on('open', () => {
        console.log('Database successfully connected');
    })
    db.on('error', error => {
        console.log('Error:', error);
    })
};
connect();