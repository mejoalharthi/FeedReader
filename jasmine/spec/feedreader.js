$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('URL are defiend and not empty ', function() {
      var Counter;
      for (Counter in allFeeds) {
        expect(allFeeds[Counter].url).toBeDefined();
        expect(allFeeds[Counter].url.length).not.toBe(0);
      }

    });

    // allFeeds has a name defined and that the name is not empty.
    it('has name and not empty ', function() {
      var Counter;
      for (Counter in allFeeds) {
        expect(allFeeds[Counter].name).toBeDefined();
        expect(allFeeds[Counter].name.length).not.toBe(0);
      }

    });
  });


  describe('The menu', function() {
    // the menu element is hidden
    it('is Hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // the menu changes visibility when the menu icon is clicked.
    it('Visible when click and invisible after other click', function() {
      // the menu display when clicked
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      // it hide when clicked again.
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);

    });

  });

  describe('Initial Entries', function() {

    //there is at least  a single .entry element within the .feed container.
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });
    it('there is at least a single .entry element within the .feed container', function(done) {
      expect($('.feed .entry').length).not.toBe(0);
      done();
    });
  });

  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    var oldFeedContent;
    // a new feed is loaded by the loadFeed function that the content actually changes.
    beforeEach(function(done) {
      loadFeed(0, function() {
        oldFeedContent = $('.feed').text();
      });
      loadFeed(1, function() {
        done();
      });
    });

    it('feed content changed', function(done) {
      expect($('.feed .entry')).not.toBe(oldFeedContent);
      done();
    });
  });
}());
