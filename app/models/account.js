const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  account: {
    type: Number,
    required: true,
    integer: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Account', accountSchema)
