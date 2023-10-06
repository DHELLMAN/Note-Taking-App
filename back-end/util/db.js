const mongoose = require('mongoose');

const mongoConnect = (cb) => {
    mongoose.connect(`${process.env.DATABASE}`)
    .then(()=>{
        console.log('Mongo Connected');
        cb();
    })
    .catch(err=>{
        console.log('Failed to connect to database');
        console.log(err);
    })
}

module.exports = mongoConnect;