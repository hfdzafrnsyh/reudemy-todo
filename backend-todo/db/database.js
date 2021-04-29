const mongoose = require("mongoose");

const uri = process.env.URI;

mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
})

const connection = mongoose.connection;

connection.once('open' , () => {
    console.log('MongoDB connect Successfully');
});
