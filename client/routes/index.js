  /**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/service/:category?', routes.views.services);
  app.get('/service/post/:post', routes.views.post);
  app.get('/service/ir/demo', routes.views.irdemo);
  app.get('/portfolio', routes.views.portfolios);
  app.get('/portfolio/:post', routes.views.portfolio);
	app.get('/gallery', routes.views.gallery);
	app.all('/about', routes.views.about);

  // Views English

  app.get('/eng/', routes.views.index);
  app.get('/eng/service/:category?', routes.views.services);
  app.get('/eng/service/post/:post', routes.views.post);
  app.get('/eng/service/:post', routes.views.service);
  app.get('/eng/portfolio', routes.views.portfolios);
  app.get('/eng/portfolio/:post', routes.views.portfolio);
  app.get('/eng/gallery', routes.views.gallery);
  app.all('/eng/about', routes.views.about);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
