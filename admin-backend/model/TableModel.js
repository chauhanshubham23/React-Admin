const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    code: {
        type: Number
      },
      name: {
        type: String
      },
      qty: {
        type: Number
      },
      price: {
        type: Number
      },
      date: { type: Date, default: Date.now },

})
module.exports = new mongoose.model("User",userSchema);