const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config');

require("dotenv").config();

const port = process.env.PORT;

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});


var routes = require('./routes/route');
app.use('/api', routes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

sequelize.authenticate().then(() => {
    // sequelize.sync({ force: false, alter: true })
    console.log('Database connection has been established successfully.');
}).catch(err => {
    console.log('Unable to connect to the database:', err);
});

app.listen(port, () => {
    console.log("Your Server running at " + port);
});