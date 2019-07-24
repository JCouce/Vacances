const passport = require ('passport');
const mongoose = require('mongoose');
const Month = mongoose.model('months');
const Day = mongoose.model('days');

module.exports = app => {
  app.get ('/api/months', async (req, res) => {
    const months = await Month.find({});

    res.send(months);
  });
  app.get ('/api/monthInfo/:id', async (req, res) => {
    const months = await Month.findOne({"monthId":req.params.id});

    res.send(months);
  });
  app.get('/api/months/:id', async (req, res) => {
    const days = await Day.find({"monthId":req.params.id}).sort({ "dayId": 'asc' });

    res.send(days);
  });

  //Create month api function
  // app.get ('/api/eWue66TyM4bHkcreateMonth', async (req, res) => {
  //   var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  //   var months = [1,2,3,4,5,6,7,8,9,10,11,12];
  //   months.forEach(async m =>{
  //     days.forEach(e => {
  //       await new Day ({ dayId: e, monthId: m }).save ();
  //     });
  //   })

  //   res.send('done!');
  // });
};
