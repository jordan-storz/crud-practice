var express = require('express')
var app = express()
var userRoutes = require('./routes/user')
app.use('/user', userRoutes)

app.listen(process.env.PORT || 3000, function() { //app.listen takes two arguments like here, a port number and a function
    console.log("hi");
})
