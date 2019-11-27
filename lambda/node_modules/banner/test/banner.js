var assert = require('assert');
var Banner = require('banner');

describe('Banner', async function () {
  /**
   * SETUP
   */
  const term = 202003

  /**
   * CONSTRUCTOR
   */
  describe('#constructor(term)', function () {
    it('Should throw an error when a term is not passed', function () {
      assert.throws(() => new Banner(), Error, 'Must provide term to complete object construction');
    });
  });

  /**
   * _INIT()
   */
  describe('#_init()', function () {
    it('Should set Banner.Cookie value', async function () {
      let b = new Banner(term);
      await b._init();
      assert(banner.Cookie);
    });
  });

  /**
   * SETUP
   */
  var banner = await new Banner(term);

  /**
   * GET_TERMS()
   */
  describe('#getTerms()', function () {
    it('Should not throw an error', async function () {
      assert.doesNotReject(banner.getTerms());
    });

    it('Should not return void', async function () {
      assert(await banner.getTerms());
    });

    it('Should return a non-empty array', async function () {
      let terms = await banner.getTerms();
      assert(terms.length > 0);
    });
  });

  /**
   * GETSUBJECTS()
   */
  describe('#getSubjects()', function () {
    it('Should not throw an error', async function () {
      assert.doesNotReject(banner.getSubjects());
    });

    it('Should not return void', async function () {
      assert(await banner.getSubjects());
    });

    it('Should return a non-empty array', async function () {
      let terms = await banner.getSubjects();
      assert(terms.length > 0);
    });
  });

  /**
   * GETCAMPUS()
   */
  describe('#getCampus()', function () {
    it('Should not throw an error', async function () {
      assert.doesNotReject(banner.getCampus());
    });

    it('Should not return void', async function () {
      assert(await banner.getCampus());
    });

    it('Should return a non-empty array', async function () {
      let terms = await banner.getCampus();
      assert(terms.length > 0);
    });
  });

  /**
   * GETCOLLEGES()
   */
  describe('#getColleges()', function () {
    it('Should not throw an error', async function () {
      assert.doesNotReject(banner.getColleges());
    });

    it('Should not return void', async function () {
      assert(await banner.getColleges());
    });

    it('Should return a non-empty array', async function () {
      let terms = await banner.getColleges();
      assert(terms.length > 0);
    });
  });

  /**
   * GETATTRIBUTES()
   */
  describe('#getAttributes()', function () {
    it('Should not throw an error', async function () {
      assert.doesNotReject(banner.getAttributes());
    });

    it('Should not return void', async function () {
      assert(await banner.getAttributes());
    });

    it('Should return a non-empty array', async function () {
      let terms = await banner.getAttributes();
      assert(terms.length > 0);
    });
  });

  /**
   * GETINSTRUCTORS()
   */
  describe('#getInstructors()', function () {
    this.timeout(15000);
    it('Should not throw an error', async function () {
      assert.doesNotReject(banner.getInstructors());
    });

    it('Should not return void', async function () {
      assert(await banner.getInstructors());
    });

    it('Should return a non-empty array', async function () {
      let terms = await banner.getInstructors();
      assert(terms.length > 0);
    });
  });

  /**
   * CLASS_SEARCH()
   */
  describe('#classSearch(subjects)', function () {
    this.timeout(15000);
    it('Should throw an error when a subject is not passed', function () {
      assert.rejects(async () => banner.classSearch, Error, 'Must provide subject');
    });

    it('Should not return NULL', async function(){
      assert(await banner.classSearch('CIS'));
    });
  });
});