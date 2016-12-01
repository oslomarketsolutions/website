var keystone = require('keystone');
var async = require('async');
exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Init locals
  locals.section = 'news';
  locals.filters = {
    category: req.params.category
  };
  locals.data = {
    posts: [],
    categories: []
  };

  // Load all categories
  view.on('init', function(next) {

    keystone.list('PostCategory').model.find().sort('name').exec(function(err, results) {

      if (err || !results.length) {
        return next(err);
      }

      locals.data.categories = results;

      // Load the counts for each category
      async.each(locals.data.categories, function(category, next) {

        keystone.list('Post').model.count().where('categories').in([category.id]).exec(function(err, count) {
          category.postCount = count;
          next(err);
        });

      }, function(err) {
        next(err);
      });

    });

  });

  // Load the current category filter
  view.on('init', function(next) {
      keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function(err, result) {
        locals.data.category = result;
        next(err);
      });
  });

  // Load the posts
  view.on('init', function(next) {
    var q = keystone.list('Post').paginate({
        page: req.query.page || 1,
        perPage: 1000,
        maxPages: 10
      })
      .where('state', 'published')
      .sort('-publishedDate')
      .populate('author categories');

    q.exec(function(err, results) {
        locals.data.posts = results.results.filter(function(item) {
          var hasPortfolio = false;
          item.categories.forEach(function (category) {
            if (category.key === 'projects') {
              hasPortfolio = true;
            }
          });
          return hasPortfolio;
        });
      next(err);
    });

  });



  // Render the view
  view.render('portfolios');

};
