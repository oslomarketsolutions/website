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
        console.log('result', result);
        next(err);
      });
    // } else {
    //   next();
    // }
    
  });
  
  // Load the posts
  view.on('init', function(next) {
    
    var q = keystone.list('Post').paginate({
        page: req.query.page || 1,
        perPage: 50,
        maxPages: 10,
        PostCategory: 'Portfolio'
      })
      .where('state', 'published')
      .sort('-publishedDate')
      .populate('author categories');
    
      // q.where('categories').in('fund');
    
    q.exec(function(err, results) {
      locals.data.posts = results;
      next(err);
    });
    
  });


  
  // Render the view
  view.render('portfolios');
  
};
