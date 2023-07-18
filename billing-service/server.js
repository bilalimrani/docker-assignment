// imports
const express = require('express');
const morgan = require('morgan');

// init express app
const app = express();

// use morgan middleware
app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World - billing service');
});

// ! USERS CRUD OPERATIONS
app.post('/billing', (req, res) => {
  const obj = {
    employeeId: '20226',
    address: 'lorem ipsum',
    address2: 'lorem ipsum',
    postal: '74600',
    city: 'KHI',
    country: 'PAKISTAN',
  };
  console.log('obj', obj);
  res.send(obj);
});

app.listen(3003);
