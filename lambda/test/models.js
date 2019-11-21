/*jshint esversion: 8*/

var models = require('models');
var asssert = require('assert');
var fs = require ('fs');
var { promisify } = require('util');
var readFile = promisify(fs.readFile);

describe('models', function() {

    describe('#BannerToDB.convert', function() {
      var testData = {};
        before(async function(){
            testData = JSON.parse(await readFile('./test/models.json'));
        });
       
        it('Should match the database format', function() {
            testData.forEach(example => asssert.deepEqual(models.BannerToDB.convert([example.input]), [example.output]));
        });
    });
});
