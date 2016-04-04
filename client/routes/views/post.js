var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.post
	};
	locals.data = {
		posts: []
	};

	// Load the current post
	view.on('init', function(next) {
		var q = keystone.list('Post').model.findOne({
			state: 'published',
			slug: locals.filters.post
		}).populate('author categories');

		q.exec(function(err, result) {
			locals.data.post = result;

      if (result) {
        view.query('galleries', keystone.list('Gallery').model.find({
          key: result.slug
        }).sort('sortOrder'));
      }
      next(err);
		});

	});

	// Load other posts
	view.on('init', function(next) {

		var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function(err, results) {
			locals.data.posts = results;
			next(err);
		});

	});


  // Load the posts
  view.on('init', function(next) {

    var q = keystone.list('Post').paginate({
        page: req.query.page || 1,
        perPage: 1000,
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
          var hasProduct = false;
          item.categories.forEach(function (category) {

            if (category.key === 'english') {
              hasEnglish = true;
            }
            if (category.key === 'projects') {
              hasProduct = true;
            }
          });
          return (!isNorwegian && hasProduct && hasEnglish) || (isNorwegian && hasProduct && !hasEnglish);
        });
      next(err);
    });

  });

	// Render the view
	view.render('post');

};
