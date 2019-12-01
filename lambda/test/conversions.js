'use strict';

var {BannerToDB, ConvertBannerCatalog} = require('conversions');
var asssert = require('assert');
var fs = require ('fs');

describe('conversions', function() {
    var data = JSON.parse(fs.readFileSync('./test/conversions.json', 'utf8'));
    console.log(data)

    describe('#BannerToDB', function() {
        let testData = data.BannerToDB;
        it('Should create multiple classtimes', function() {
            let example = testData['multipleMeetingTimes'];
            asssert.deepStrictEqual(BannerToDB([example.input]), [example.output]);
        });

        it('Should create empty classtime array for meetingTimes with no days', function() {
            let example = testData['meetingTimeNoDays'];
            asssert.deepStrictEqual(BannerToDB([example.input]), [example.output]);
        });

        it('Should handle empty meetingTime and faculty arrays', function() {
            let example = testData['emptyMeetings'];
            asssert.deepStrictEqual(BannerToDB([example.input]), [example.output]);
        });
    });

    describe('#ConvertBannerCatalog', function() {
        let testData = data.BannerCatalog;
        it('Should return a concatenated string', function() {
            asssert.deepStrictEqual(ConvertBannerCatalog([testData.input]), [testData.output]);
        });
    });
});