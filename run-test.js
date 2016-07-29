var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    '*.js'
  ],
  stopSpecOnExpectationFailure: false,
  random: false
});


//jasmine.addReporter(reporter);

jasmine.execute();
