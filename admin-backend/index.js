const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/TableRoute')
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())


mongoose.connect("mongodb://localhost:27017/Rubick", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database Connected..")
})

app.use(routes)

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})
