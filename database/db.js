const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/duguid');

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;
