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
      view.query('galleries', keystone.list('Gallery').model.find({
        key: result.slug
      }).sort('sortOrder'));
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


  // Load the portfolio post, from product category
  view.on('init', function(next) {
    
    var q = keystone.list('Post').paginate({
        page: req.query.page || 1,
        perPage: 50,
        maxPages: 10,
      })
      .where('state', 'published')
      .populate('categories')
      .sort('-publishedDate')
      .populate('author');
      //.where('categories').in([category.id])


    
      // q.where('categories').in(['Fund']);

    q.exec(function(err, results) {
      locals.data.posts = results.results.filter(function(item) {
        return item.categories.some(function(category) {
          console.log('category', category);
          return category.key === 'portfolio';
        });
      });
      console.log('locals.data', locals.data.posts);
      next(err);
    });
    
  });
	
	// Render the view
	view.render('post');
	
};
