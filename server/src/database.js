const mongoose = require('mongoose')

mongoose
    .connect('mongodb://0.0.0.0/hibuddy')
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.log(err));

    