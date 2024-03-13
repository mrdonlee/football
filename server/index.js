const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/footballRoute');

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/footballDB');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get('/', (req, res) =>
    res.send(`Running at ${PORT}`)
);

app.listen(PORT, () =>
    console.info(`Running football app at ${PORT}`)
);

module.exports = { app, PORT };
