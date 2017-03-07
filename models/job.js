const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  rate: { type: Number },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

jobSchema.methods.ownedBy = function ownedBy(user){
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('Job', jobSchema);
