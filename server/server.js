const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const messageRouter = require('./routes/message.router');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/message', messageRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
});