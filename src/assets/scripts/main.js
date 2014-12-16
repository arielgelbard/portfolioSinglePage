//- Portfolio Site
//- By: Ariel Gelbard
//- Date: December 9, 2014

// -----------------------------
// Database of Portfolio Pieces
// -----------------------------
var portfolio = [
{"id":"1",
"title":"AppSeed",
"skills":"Android & iOS Developer",
"profilePic":"piece1.png",
},

{"id":"2",
"title":"Ewaste Infographic",
"skills":"Designer & Front-End Developer",
"profilePic":"piece2.png",
},

{"id":"3",
"title":"Not Far From the Tree",
"skills":"Front-End & Back-End Developer",
"profilePic":"piece3.png",
},

{"id":"4",
"title":"Emily Walkman",
"skills":"Designer & Mobile Developer",
"profilePic":"piece4.png",
}

];

var portfolioDetails = [
{"id":"1",
"title":"AppSeed: Turn Sketches into functioning prototypes",
"button1Link":"https://www.kickstarter.com/projects/appseed/appseed-turn-sketches-into-functioning-prototypes",
"button1Title":"Visit",
"role":"Developer",
"skills":"Java, Android Studio, Objective C, Xcode",
"content":"This project focused on creating an app that would turn sketches into functioning prototypes.",
"desktopScreenshot":"\/assets\/images\/pieces\/piece1-desktop.png",
"mobileScreenshot":"\/assets\/images\/pieces\/piece1-mobile.png",
},

{"id":"2",
"title":"Ewaste Infographic",
"button1Title":"Visit",
"button1Link":"http:\/\/arielgelbard.com\/infographic",
"role":"Design and Developer",
"skills":"HTML5, CSS3, Jquery",
"content":"This project was produced in illustrator and photoshop and later coded into a interactive website.",
"desktopScreenshot":"\/assets\/images\/pieces\/piece2-desktop.png",
},

{"id":"3",
"title":"Not Far From the Tree",
"button1Link":"https://github.com/arielgelbard/WEBD/tree/master/WEBD%20221/integrative",
"button1Title":"Github",
"button2Title":"Visit",
"button2Link":"http:\/\/arielgelbard.com\/notfarfromthetree",
"role":"Development",
"skills":"HTML5, CSS3, Jquery, PHP, mySQL",
"content":"A non-profit organization that speacalizes in picking and sharing excess fruit.",
"desktopScreenshot":"\/assets\/images\/pieces\/piece3-desktop.png",
"mobileScreenshot":"\/assets\/images\/pieces\/piece3-mobile.png",
},

{"id":"4",
"title":"Emily Walkman",
"profilePic":"piece1.png",
"role":"Designer and Developer",
"skills":"Javascript and Titanium Studio",
"content":"A talented singer and song writer who wanted an application for her fans.",
//<div class='caseStudy'><h1>Emily Walkerman Case Study</h1><div class='fiv'> <div class='fivLeft'> <h3>Introduction</h3><p>This project was for Emily Walkman, a musical artist who wanted an app so users can be able to listen to her music and browse other media content hassle free. The original design was great, but now times have changed; and a redesign was needed.</p></div><div class='fivRight'><img src='/assets/images/pieces/piece4/portfolio_improvement11.png' alt='#' /></div></div><div class='fiv'><div class='fivLeft'>  <h3>Style</h3><p>First off, the colour scheme and fonts needed an update and a better polish that would fit her persona.</p></div><div class='fivRight'>  <img src='/assets/images/pieces/piece4/portfolio_improvement12.png' alt='#' /></div></div><div class='fiv'> <div class='fivLeft'> <h3>Main Menu and Navigation</h3><p>In the original design, the app would first load and display a menu with options. Once an option was chosen, it would animate and slide a new page into the screen view. This experience felt like the user had to put effort into going and navigating from menu option to menu option.  Reaching the main menu options also wasn’t pleasant. Some sections didn’t have a top bar that integrated into the window with content appropriately. As well top bars seemed to be proving problematic and becoming a boring trend.</p></div><div class='fivRight'> <img src='/assets/images/pieces/piece4/portfolio_improvement11.png' alt='#' /></div></div><div class='fiv'> <div class='fivLeft'> <h3>Music Player</h3><p>The music player didn’t fit the theme and style of the application. There was also no entertainment solution for users who wants to listen to music and multitask within the app.</p></div><div class='fivRight'> <img src='/assets/images/pieces/piece4/portfolio_improvement16.png' alt='#' /></div></div><div class='fiv'> <div class='fivLeft'><h3>Social Media</h3><p>There are too many social media options to choose from, some are outdated streams of media, and users want all information at the same time. Unfortunately these sources came from all different sorts of unique news feeds.</p></div><div class='fivRight'><img src='/assets/images/pieces/piece4/portfolio_improvement15.png' alt='#' /></div></div><div class='fiv'> <div class='fivLeft'> <h3>Overall Foreseen Problem</h3><p>I had to think outside the box and attract users to wanting to go back and use the app every two weeks and be interactive with it. Users could always use a 3rd party music provider to download her music, go to youtube to watch her lyrical and/or music videos, and even casually browse social media sites to know more about any new information. </p></div><div class='fivRight'> <img src='/assets/images/pieces/piece4/portfolio_improvement14.png' alt='#' /></div></div><div class='fiv'> <div class='fivLeft'> <h3>Thinking Outside the Box and Triumphing</h3><p>I realized that all of the media presented wasn’t an all in one cohesive experience. That was the main goal. I wanted to think of the new, next big multimedia experience. Therefore, I wanted to create an all in one page experience so users would not to feel disconnected from page to page and task-to-task. Therefore, I edited, created and moved content and functionality in order to achieve a successful ux experience.</p></div><div class='fivRight'> <img src='/assets/images/pieces/piece4/portfolio_improvement.jpg' alt='#'/></div></div><div class='fiv'> <div class='fivLeft'> <h3>Style</h3><p>Through careful consideration, I had picked the best and most favorable colours, fonts, and created relatable icons that would be the best choice based on persona.</p></div><div class='fivRight'> <img src='/assets/images/pieces/piece4/portfolio_improvement1.jpg' alt='#'/></div></div><div class='fiv'> <div class='fivLeft'> <h3>Main Menu and Navigation: Scratch-It</h3><p>I first created a ‘main bar’ and fixed it to the bottom of the app for users to access the ‘menu options’ easier. This will allow users to access ‘menu options’ quicker and easier. The main menu has been re-designed and is presented in a neat, interactive way for users. The way it is styled, it is fun and visually appealing to view photos, the latest news, or chose a different music video media type. It easily fades in when the menu button is clicked and fades out once an option is selected.</p></div><div class='fivRight'> <img src='/assets/images/pieces/piece4/portfolio_improvement5.jpg' alt='#' class='portRight'/></div></div><div class='fiv' class='clear'><h3>Improving the Music Player</h3><p>In the music industry, the trend has always been to have a music video for the most popular song of an artist’s album. In some cases today, a whole album full of songs can be produced into theatrical music videos. In most cases today, songs have a Lyrical music video. As a great experience for the user, it was awesome to be able to integrate these interactive media videos. Instead of a boring music player with an album cover, users can enjoy watching music videos, following and/or interacting with the lyrics.</p><p>Another Significant decision taken was to move the music player controllers to the top. It helped create a simple solution to enable a larger screen real-estate and re-structure the layout based on the functionality of certain button. It just made sense to change the positions of these buttons to all sit together in the same similar section.</p></div><div class='fivRight2'> <img src='/assets/images/pieces/piece4/portfolio_improvement3.jpg' alt='#' class='portRight'/><img src='/assets/images/pieces/piece4/portfolio_improvement2.jpg' alt='#' class='portRight'/><img src='/assets/images/pieces/piece4/portfolio_improvement4.jpg' alt='#' class='portRight'/></div><div class='fiv'> <h3>Gathering Social Media Together</h3><p>There are so many social media sites and all of them are unique and serve a specific purpose. Usually users will have a news feed to check as their main source of information. Instead of having separate social media menu options, It was ideal to that these social media outlets can all fit into one news feed. Users have the option to filter certain social media outlets that they don’t desire to have in the feed.</p></div><div class='fivRight2'> <img src='/assets/images/pieces/piece4/portfolio_improvement6.jpg' alt='#' class='portRight'/><img src='/assets/images/pieces/piece4/portfolio_improvement7.jpg' alt='#' class='portRight'/></div><div class='fiv'> <h3>Conclusion</h3><p>There were a lot of layout issues and many dramatic improvements. I successfully implemented a new way to visualize music, have social media news and streams in a one page layout, and have an amazing ux user interface.</p></div><div class='fivRight2'><img src='/assets/images/pieces/piece4/portfolio_improvement9.jpg' alt='#' class='portRight'/><img src='/assets/images/pieces/piece4/portfolio_improvement10.jpg' alt='#' class='portRight'/></div></div>
"desktopScreenshot":"\/assets\/images\/pieces\/piece4-desktop.png",
"mobileScreenshot":"\/assets\/images\/pieces\/piece4-mobile.png",
}

];

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
      "" : "home",
      "portfolio" : "portfolio",
      "portfolioDetail" : "portfolio",
      "portfolioDetail/" : "portfolio",
      "portfolioDetail/:id" : "portfolioDetail",
      "about" : "about",
      "contact" : "contact"
    },

    // Home Route
    home: function() {
      App.views["home"].render();
    },

    // Portfolio Route
    portfolio: function() {
      App.views["portfolio"].render();
    },

    // Portfolio Detail Route
    portfolioDetail: function(id) {
      App.views["portfolioDetail"].render({id:id});
    },

    // About Route
    about: function() {
      App.views["about"].render();
    },

    // Contact Route
    contact: function() {
      App.views["contact"].render();
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
      portfolioDetail: new PortfolioDetailView(),
      about: new AboutView(),
      contact: new ContactView()
    };

  };

  // -----------------------------
  // View Template
  // -----------------------------
  function createView(page) {
    var view = Backbone.View.extend({

        // Our Container Element
        el: $(".main"),

        // Our template ID
        template: "#" + page,

        // Initialize View
        initialize: function() {

          // Setup our template and start our model
          var html = $(this.template).html();
          this.template = Handlebars.compile(html);
          this.model = new Backbone.Model({});

          // If the current link is the portfolio template
          if (page === "portfolio"){

            //Pass portfolio database
            this.model.set({
              piece: portfolio
            });
          }

        },

        // Our Render Function
        render: function(id) {

          // If the current link is for the portfolio details template
          if (page === "portfolioLanding"){
            var pPiece;

            //See which id the link requested
            for (piece in portfolioDetails){
              if (portfolioDetails[piece].id === id.id){

                //Assign Portfolio Piece found to the variable
                pPiece = portfolioDetails[piece];
                break;
              }
            }

            //If no portfolio piece was found
            if (pPiece == undefined){
              //Send Error Message
              this.model.set({
                title:"Please Select a Portfolio Piece"
              });
            }
            //If a portfolio piece was found
            else{
              //Send Information pertaining to the portfilio piece

              this.model.set({
                title: pPiece.title,
                button1Title:pPiece.button1Title,
                button2Title:pPiece.button2Title,
                button1Link:pPiece.button1Link,
                button2Link:pPiece.button2Link,
                role:pPiece.role,
                content:pPiece.content,
                skills:pPiece.skills,
                mobileScreenshot:pPiece.mobileScreenshot,
                desktopScreenshot:pPiece.desktopScreenshot
              });
            }
          }

          // Get data and render our template
          var data = this.model.toJSON();
          var html = this.template(data);

          // Set update the containers HTML
          $(this.el).html(html);
        }

      });
    return view;
  }

  // -----------------------------
  // Create Views
  // -----------------------------
  var HomeView = createView("home");

  var PortfolioView = createView("portfolio");

  var PortfolioDetailView = createView("portfolioLanding");

  var AboutView = createView("about");

  var ContactView = createView("contact"); 

  // -----------------------------
  // Start Application
  // -----------------------------
  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ 
    pushState: true 
  });

  // -----------------------------
  // Navigation Links
  // -----------------------------
  $(document).delegate("a[href^="/"]", "click", function(e) {
    var link = $(this).attr("href");

    //If anchor tag has a class of routerlink so backbone can route it properly
    e.preventDefault();
    //Animate to proper route
    $("body").fadeOut(800,function(){
      if ( $(window).width() >= 750){
        
      }
      else{
        $("nav").slideToggle();
      }
      App.router.navigate(link, { trigger: true });
      $("body").hide();
      $("body").fadeIn(800);         
  });

  // -----------------------------
  //  Navigation Functionality
  // -----------------------------
  //Shows Navigation Icon if width of window is under 750px
  $(window).resize(function () {
    if ( $(window).width() >= 750){
      $("nav").show();
    }
    else{
      $("nav").hide();
    }
  });

  //If the Navigation is Hidden
  if($("nav").not(":hidden")){
    if ( $(window).width() >= 750){}
    else{
      $("nav").slideToggle();
    }
  }

  //Toggle Navigation when Clicked
  $(".menu").click(function(){
    $("nav").slideToggle();
  });

  // -----------------------------
  // Contact Form Submission Functionality
  // -----------------------------  
  var form = $("#form"); // contact form
  var submit = $("#submit");  // submit button
  var alert = $(".alert"); // alert div for show alert message

  var goodToGo = false;

  // when form submit occurs
  form.on("submit", function(e) {

    e.preventDefault();      

    //checks to see if email inputted is valid
    function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if( !emailReg.test( $email ) ) {
        return false;
      } 
      else {
        return true;
      }
    }

    //these variables will become true once all fields required are valid
    var emailValid = false;
    var nameValid = false;
    var messageValid = false;

    //Validate Email
    var emailaddress = $("#contactemail").val();
    if( !validateEmail(emailaddress)) {
      $(".alert").html("<p>Invalid Email Address</p>");
      $(".alert").hide();
      $(".alert").fadeIn(400);
    }
    else{
      emailValid = true;
    }

    //Validate Message Contant
    if($("#contactmessage").val().length <= 50){
      $(".alert").html($(".alert").html() + "<p>Your message must be at least 50 characters</p>");
    }
    else{
      nameValid = true;
      messageValid = true;    
    }

    if (emailValid === true && nameValid === true && messageValid === true){
      goodToGo = true;
    }

    //If Validations are successful, submit contact form:
    if (goodToGo === false){

    }
    else{
      //Send Email Off To Me!
      $.ajax({
        url: "http://arielgelbard.com/emailConfirm.php",
        type: "POST",
        data: form.serialize(),
        beforeSend: function() {
          submit.html("Sending....");
        },
        success: function() {
          $(".contactForm").hide();
          $(".contactForm").html("<p>Your Message Has Been Sent!</p>");
          $(".contactForm").delay(600).fadeIn(800);
        },
        error: function(e) {
          console.log(e);
        }
      });
    }
  });
});

// -----------------------------
// Google Analytics
// -----------------------------
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","//www.google-analytics.com/analytics.js","ga");

ga("create", "UA-50102754-1", "arielgelbard.com");
ga("send", "pageview");

// -----------------------------
// Other Relevant Code
// -----------------------------
//When Website loads up for the first time, have webpage fade in
$("body").hide();
$("body").fadeIn(800);

