const { attributes } = require('structure');

export = attributes({
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo_url: {
    type: String,
    required: false,
    empty: true
  },
  phone: {
    type: String,
    required: false,
    empty: true
  }
})(class UserModel { });