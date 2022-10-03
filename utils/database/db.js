import mongoose from 'mongoose';

async function db() {
  mongoose.connect('mongodb://localhost:27017/duguid')
    .then('mongo successfully connected');
}

// db.on('error', () => {
//   console.log('mongoose connection error');
// });

// db.once('open', () => {
//   console.log('mongoose connected successfully');
// });

export default db;
