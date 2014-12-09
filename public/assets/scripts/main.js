//push state
//server-side rendering vs client side rendering
//#! (hash bang), for old school browser
//routing, data storage, templates, models, views, controllers

//{{{}}} means to treat it as a string, escape characters



// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'portfolio' : 'portfolio',
      'about': 'about',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // Portfolio Route
    portfolio: function() {
      console.log('Navigating to Portfolio Page');
      App.views['portfolio'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      portfolio: new PortfolioView(),
      about: new AboutView(),
      contact: new ContactView()
    };

  };


function createView(page) {
var temp= Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#'+page,

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      var html = $(this.template).html();
      this.template = Handlebars.compile(html);
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1> '+page+' Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });
return temp;
}



  // -----------------------------
  // Home View
  // -----------------------------

   var HomeView=createView('home'); //= Backbone.View.extend({
var PortfolioView=createView('portfolio');


  //   // Our Container Element
  //   el: $('.main'),

  //   // Our template ID
  //   template: '#home',

  //   // Initialize View
  //   initialize: function() {

  //     // Setup our template and start our model
  //     var html = $(this.template).html();
  //     this.template = Handlebars.compile(html);
  //     this.model = new Backbone.Model({});

  //     // Some page data
  //     this.model.set({
  //       content: '<h1>Home Page</h1>'
  //     });

  //   },

  //   // Our Render Function
  //   render: function() {

  //     // Get data and render our template
  //     var data = this.model.toJSON();
  //     var html = this.template(data);

  //     // Set update the containers HTML
  //     $(this.el).html(html);
  //   }

  // });

  // -----------------------------
  // Portfolio View
  // -----------------------------

  // var PortfolioView = Backbone.View.extend({

  //   // Our Container Element
  //   el: $('.main'),

  //   // Our template ID
  //   template: '#portfolio',

  //   // Initialize View
  //   initialize: function() {

  //     // Setup our template and start our model
  //     var html = $(this.template).html();
  //     this.template = Handlebars.compile(html);
  //     this.model = new Backbone.Model({});

  //     // Some page data
  //     this.model.set({
  //       content: '<h1>Portfolio Page</h1>'
  //     });

  //   },

  //   // Our Render Function
  //   render: function() {

  //     // Get data and render our template
  //     var data = this.model.toJSON();
  //     var html = this.template(data);

  //     // Set update the containers HTML
  //     $(this.el).html(html);

  //   }

  // });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>About Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Contact Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    e.preventDefault();
    App.router.navigate($(this).attr('href'), { trigger: true });

  });


});