//connect db to mongdb using mongoose
const mongoose = require('mongoose')


//handlers for events when conencting to db
mongoose.connection.on('connected', () => {
    console.log('You are now connected')
})

mongoose.connection.on('reconnected', () => {
    console.log('You are now reconnected')
})

mongoose.connection.on("disconnected", () => {
    console.log("You are now disconnected")
})

mongoose.connection.on("close", () => {
    console.log("The connection has been closed")
});

mongoose.connection.on("error", error => {
    console.log("error: " + error)
});


async function connect(url) {
    return await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
}

module.exports.connect = connect