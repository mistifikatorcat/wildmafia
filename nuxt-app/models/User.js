const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Рулон Обоев",
    required: true,
  },
  nickname: {
    type: String,
    default: "Tony Soprano",
    required: true,
  },
  photo: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: "Please enter the valid URL",
    },
  },
  startedPlay: {
    type: Date,
  },
  favoriteRole: {
    type: String,
    required: true,
  },
  Highlight: {
    type: String,
  },
  epicFail: {
    type: String,
  },
  Advice: {
    type: String,
  },
  Superuser: {
    type: Boolean,
    default: false,
    required: true,
  },
});
