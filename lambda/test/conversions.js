'use strict';

var {BannerToDB} = require('conversions');
var asssert = require('assert');
var fs = require ('fs');
var { promisify } = require('util');
var readFile = promisify(fs.readFile);

describe('conversions', function() {

    describe('#BannerToDB', function() {
        var testData = {}
        before(async function(){
            testData = JSON.parse(await readFile('./test/conversions.json'));
        });
       
        it('Should create multiple classtimes', function() {
            let data = testData['multipleMeetingTimes'];
            asssert.deepEqual(BannerToDB([data.input]), [data.output]);
        });

        it('Should create empty classtime array for meetingTimes with no days', function() {
            let data = testData['meetingTimeNoDays'];
            asssert.deepEqual(BannerToDB([data.input]), [data.output]);
        });

        it('Should handle empty meetingTime and faculty arrays', function() {
            let data = testData['emptyMeetings'];
            asssert.deepEqual(BannerToDB([data.input]), [data.output]);
        });
    });
});