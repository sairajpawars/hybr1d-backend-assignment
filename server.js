const express = require("express");
require("express-async-errors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(require("cors")());

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json());

const db = require("./config/database");
db();

app.use(`/api/auth`, require('./routes/auth'));
app.use(`/api/buyer`, require('./routes/buyer'));
app.use(`/api/seller`, require('./routes/seller'));

const errorHandler = require("./app/middlewares/error-handlers/error-handler");
app.use(errorHandler);

app.listen(port, () => {
    console.log(
        `Listening on PORT --> ${port}`
    );
});