const express = require('express')
const morgan = require('morgan')
const app = express()

// enviroment variables
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/employees", require('./routes/employees.routes'))
app.use("/api/products", require('./routes/products'))
app.use("/api/tables", require('./routes/tables'))
app.use("/api/promotions", require('./routes/promotions'))
app.use("/api/orders", require('./routes/orders'))
module.exports = app;