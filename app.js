const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger/swagger.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use(require('./components'));

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
    requestCert: true,
    rejectUnauthorized: false
}, app).listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));