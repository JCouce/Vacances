const mongoose = require ('mongoose');
const Month = mongoose.model ('months');
const Day = mongoose.model ('days');
const Request = mongoose.model('hollydaysRequest');

module.exports = app => {
  app.get ('/api/months', async (req, res) => {
    const months = await Month.find ({});

    res.send (months);
  });
  app.get ('/api/hollidaysrequest/:id', async (req, res) => {
    const request = await Request.find ({userId:req.user.id, monthId: req.params.id});

    res.send (request);
  });

  app.get ('/api/monthInfo/:id', async (req, res) => {
    const months = await Month.findOne ({monthId: req.params.id});

    res.send (months);
  });

  app.get ('/api/months/:id', async (req, res) => {
    const days = await Day.find ({monthId: req.params.id}).sort ({
      dayId: 'asc',
    });

    res.send (days);
  });

  app.get ('/api/hr', async (req, res) => {
    await new Request ({
      requestId: '20',
      userId: '5d2f18e279fa500016b37a91',
      dayId: '6',
      monthId: '10',
      status: 'approved',
      createdAt: new Date ('1995-06-07'),
      updatedBy: {"_id":"5d2f18e279fa500016b37a91","googleId":"118415261878187794841","name":"Juan","__v":0},
      lastModified: new Date ('2019-07-05'),
      message: 'Hablamelo',
    }).save ();
  
    res.send ('done');
  });
};
//Create month api function
//TODO: Make 30 days and 28 days months
//   app.get ('/api/eWue66TyM4bHkcreateMonth', async (req, res) => {
//     var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
//     var months = [1,2,3,4,5,6,7,8,9,10,11,12];
//     months.forEach(async m =>{
//       days.forEach(e => {
//         await new Day ({ dayId: e, monthId: m }).save ();
//       });
//     })

//     res.send('done!');
//   });
// };

