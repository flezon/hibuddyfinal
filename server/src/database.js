const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/hibuddy')
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.log(err));