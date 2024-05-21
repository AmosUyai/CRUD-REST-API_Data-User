const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = require('./config/db');
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server berjalan pada port 5000');
});
