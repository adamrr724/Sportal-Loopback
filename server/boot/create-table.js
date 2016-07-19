module.exports = function(app) {
  app.dataSources.sportaldb.automigrate('Event', function(err) {
    if (err) throw err;

    app.models.Event.create([
      {name: 'Test', sport: 'test', date: '2016-07-18', notes: 'test', skillLevel: 'test'},
  ], function(err, Events) {
      if (err) throw err;

      console.log('Models created: \n', Events);
    });
  });
};
