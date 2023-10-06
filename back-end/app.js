const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/db');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//routes here
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

mongoConnect(()=>{
    app.listen(8000);
    console.log('Listening at 8000');
})
