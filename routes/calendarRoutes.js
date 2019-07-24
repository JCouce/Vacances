const passport = require ('passport');
const mongoose = require('mongoose');
const Month = mongoose.model('months');

module.exports = app => {
  app.get ('/api/months', async (req, res) => {
    const months = await Month.find({});

    res.send(months);
  });
};
