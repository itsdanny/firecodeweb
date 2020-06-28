/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const Skill = require('../../models/skill');

router.get('/list', (req, res, next) => {
  Skill.find((err, skills) => {
    if (err) {
      return res.send(err);
    }
    return res.json(skills);
  });
});

module.exports = router;
