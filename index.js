const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config()
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());

// Use routes
app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

