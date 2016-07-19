module.exports = function(app) {
  app.dataSources.sportaldb.automigrate('Event', function(err) {
    if (err) throw err;

    app.models.Event.create([
      {name: 'Test', sport: 'test', notes: 'test', skillLevel: 'test', recurring: '1', age: 'test', fees: 'test' },
  ], function(err, Events) {
      if (err) throw err;

      console.log('Models created: \n', Events);
    });
  });
};
