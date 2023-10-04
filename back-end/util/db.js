const mongoose = require('mongoose');

const mongoConnect = (cb) => {
    mongoose.connect('mongodb+srv://lmmalik933:Lokesh2104@cluster0.pvuqmls.mongodb.net/TECH?retryWrites=true&w=majority')
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