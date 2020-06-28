/* eslint-disable linebreak-style */
// eslint-disable-next-line import/newline-after-import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Skill = new Schema({
  title: String,
  domain: String,
  img: String,
});
// eslint-disable-next-line linebreak-style

module.exports = mongoose.model('Skill', Skill);
