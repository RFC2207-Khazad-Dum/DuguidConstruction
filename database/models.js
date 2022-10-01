const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  accessLevel: String,
})

const reviewSchema = new mongoose.Schema({
  user: String,
  date: Date,
  body: String,
  title: String,
  img: String
})

const jobSchema = new mongoose.Schema({
  title: String,
  address: String,
  client: String,
  assignedEmployee: String,
  media: String,
  description: String,
  categories: [String],
  date: Date
})

const toolSchema = new mongoose.Schema({
  category: String,
  tools : [String],
})

module.exports = {
  Users: mongoose.model('Users', userSchema),
  Reviews: mongoose.model('Reviews', reviewSchema),
  Jobs: mongoose.model('Jobs', jobSchema),
  Tools: mongoose.model('Tools', toolSchema),
}

