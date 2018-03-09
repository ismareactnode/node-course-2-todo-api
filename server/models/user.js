var { mongoose } = require ('../db/mongoose');

var User = mongoose.model('user', {
  email: {
    type: String,
  minlength: 3,
  required: true,
  trim: true
  }
});

module.exports={User};
