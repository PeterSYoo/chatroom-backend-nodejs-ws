const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type: String, required: true },
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  photoURL: { type: String, required: true },
});

const Users = mongoose.models.user || mongoose.model('User', userSchema);

export default Users;
