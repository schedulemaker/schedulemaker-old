var assert = require('assert');
var Banner = require('banner');

describe('Banner', function() {
  /**
   * SETUP
   */
  var banner = new Banner();

    /**
     * INIT()
     */
    describe('#init(term)', function() {
      it('Should not throw an error', function(){
        assert.doesNotReject(banner.init());
      });

      it('Should set Banner.Cookie value', async function() {
        await banner.init();
        assert(banner.Cookie);
      });
    });

    /**
     * GET_TERMS()
     */
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

    /**
     * GETSUBJECTS()
     */
    describe('#getSubjects()', function(){
      it('Should not throw an error', async function(){
        assert.doesNotReject(banner.getSubjects());
      });
    });
  });