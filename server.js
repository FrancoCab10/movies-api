require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('./api/router');
const cors = require('./api/middlewares/cors');

const port = process.env.PORT || 8000;
const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
app.use('/v1', router);

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
