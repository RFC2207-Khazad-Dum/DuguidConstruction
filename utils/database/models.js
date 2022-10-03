import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  employeeId: Number,
  accessLevel: String,
})

const reviewSchema = new Schema({
  user: String,
  date: Date,
  body: String,
  title: String,
  img: String
})

const jobSchema = new Schema({
  title: String,
  address: String,
  client: String,
  assignedEmployee: String,
  media: String,
  description: String,
  categories: [String],
  date: Date,
  complete: {type: Boolean, default: false}
})

const toolSchema = new Schema({
  category: String,
  tools : [String],
})


export const Users = models.Users || mongoose.model('Users', userSchema);
export const Reviews = models.Reviews || mongoose.model('Reviews', reviewSchema);
export const Jobs = models.Jobs || mongoose.model('Jobs', jobSchema);
export const Tools = models.Tools || mongoose.model('Tools', toolSchema);
