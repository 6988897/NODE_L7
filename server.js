require('dotenv').config();
const express = require('express');
const bodyParser = require('./src/middlewares/bodyParser');


const concertRoutes = require('./src/routes/concertRoutes');
const ticketRoutes = require('./src/routes/ticketRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser);


app.use('/api/concerts', concertRoutes);
app.use('/api/tickets', ticketRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});