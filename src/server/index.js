// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Register routes
app.use('/api', authRoutes);
app.use('/api', billingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
