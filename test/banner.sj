var assert = require('assert');
var Banner = require('banner');

describe('Banner', function() {
  var banner = new Banner();

    describe('#init(term)', function() {
      it('Should not throw an error', function(){
        assert.doesNotReject(banner.init());
      });

      it('Should set the Cookie value for requests', async function() {
        await banner.init();
        assert(banner.cookie);
      });
    });

    describe('#getTerms()', function(){
      it('Should not throw an error', async function(){
        assert.doesNotReject(banner.getTerms());
      });

      it('Should not return void', async function(){
        assert(await banner.getTerms());
      });

      it('Should return a non-empty array', async function(){
        assert.notDeepEqual(await banner.getTerms(), []);
      });
    });
  });