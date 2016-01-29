var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
  // Init locals
  locals.section = 'index';
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
      // locals.data.categories = [results];
      locals.data.categories = [{ _id: '55a3bc70a042fc5e1128bc74', key: 'blog', name: 'Blog', __v: 0 }]

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

    if (req.params.category) {
      keystone.list('PostCategory').model.findOne({ key: "blog"}).exec(function(err, result) {
        locals.data.category = result;
        next(err);
      });
    } else {
      next();
    }

  });

  // Load the posts
  view.on('init', function(next) {
    var q = keystone.list('Post').paginate({
        page: req.query.page || 1,
        perPage: 50,
        maxPages: 1
      })
      .where('state', 'published')
      .sort('-publishedDate')
      .populate('author categories');

    if (locals.data.category) {
      q.where('categories').in([locals.data.category]);
    }

    q.exec(function(err, results) {

        var isNorwegian = req.url.substr(0,4) === '/no' || req.url.substr(0,4) === '/no/'
        locals.data.posts = results.results.filter(function(item) {
          var hasEnglish = false;
          var hasPortfolio = false;
          item.categories.forEach(function (category) {

            if (category.key === 'english') {
              hasEnglish = true;
            }
            if (category.key === 'projects') {
              hasPortfolio = true;
            }
          });
          return (!isNorwegian && hasPortfolio && hasEnglish) || (isNorwegian && hasPortfolio && !hasEnglish);
        });
      next(err);
    });

  });

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Render the view
	view.render('index');

};
