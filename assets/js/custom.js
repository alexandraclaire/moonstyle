Vue.transition("fade", {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    $(el)
      .css("opacity", 0)
      .animate({ opacity: 1 }, 1000, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    // same as enter
    $(el).animate({ opacity: 0 }, 1000, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
});

new Vue({
  el: "#app",
  data: {
    loaded: true,
    fullScreen:false,
    clicked:0,
    showMe: 0,
    showItem: [{}],
    navShow: false,
    portfolio: [
      {
        name:"The New Zealand Herald x Heart of the City",
        byline:"Interactive Microsite",
        mainImage: "assets/images/projects/lovebites/lovebites1.png",
        scope: [
          "50 quiz questions in total.", "A landing page which randomised 3 questions on each load for the user to choose from.", "Capture data from the user for marketing purposes.", "Mobile responsive.", "Embedded videos for each question.", "Compatible with all modern browsers."
        ],
        images: [
          {
            link: "assets/images/projects/lovebites/fullpage.jpg",
            caption: "On load, users are show 3 randomised question choices, which they click to open."
          },
          {
            link: "assets/images/projects/lovebites/fullpage.jpg",
            caption: "Users must watch the video and answer the question below, before proceeding to enter their details."
          },
          { 
            link: "assets/images/projects/lovebites/fullpage2.jpg",
            caption: "The user's details are saved in a database on submit, and the user can choose to opt-in to receive communications."
          },
          {
            link: "assets/images/projects/lovebites/lovebites5.png",
            caption: "Users can see more videos and start the process again, for all 50 videos. They can enter once daily."
          }
        ]
      },
      {
        name:"#ASBFarmsmarts",
        byline:"NZHerald online campaign",
        mainImage: "assets/images/projects/farmsmart/farmsmart1.jpg",
        scope: [
          "Embedded campaign inside nzherald.co.nz", "Use Wayin EngageSciences software", "Custom front-end template and interaction to work with software", "Social media aggregator to collect posts and user data", "Article post feed"
        ],
        images: [{
            link: "assets/images/projects/farmsmart/farmsmart2.jpg",
            caption: "ASB teamed up with 'How to dad' to create custom content for this campaign"
          },
          {
            link: "assets/images/projects/farmsmart/farmsmart3.jpg",
            caption: "A social media aggregator pulled in Instagram and Facebook content with the hashtag '#ASBFarmsmarts', moderated by the campaign manager. Users can 'vote' for their favourite content"
          }
        ]
      },
      {
        name:"Autolife",
        byline:"Automotive Breakdown Insurance website",
        mainImage: "assets/images/projects/autolife/autolife1.png",
        scope: [
          "Marketing site developed from PSD mockups", "Custom Wordpress theme", "Client management system connected to forms", "Instant quote system, then to populate details in application form", "Hidden motor vehicle dealer application forms."
          ],
        images: [
        {
            link: "assets/images/projects/autolife/autolife3.png",
            caption: "Application form which auto-populated from home page 'instant quote'. Details are then saved into a client management system."
          },
          {
            link: "assets/images/projects/autolife/autolife2.png",
            caption: "Marketing pages with content controlled by client in CMS, and with a contact form on every page."
          },
          
        ]
      },
      {
        name:"Joy Business Academy",
        byline:"Multiple projects built within Joy Business Academy's online learning platform and marketing site, including chat functionality between employers and learners, as well as an interactive profile for the user to complete.",
        mainImage: "assets/images/projects/jba/jba1.png",
        scope: [
          "All projects developed from PSD mockups", "Used Vue.js to create all interaction", "Page templates created using Laravel/Blade, and populated from database", "Instant chat functionality with real-time notifications using Pusher", "'Talent Search' for employers to 'headhunt' for candidates, and filter by multiple conditions", "Interactive courses for job seekers", "Re-skinning and customising according to brand guidelines and requirements for 'white-label' customers."
          ],
        images: [
        {
            link: "assets/images/projects/jba/jba2.png",
            caption: "A job seeker lands on their profile upon registration, and accumulates completion 'points' as they add detail to their online CV."
          },
          {
            link: "assets/images/projects/jba/jba6.png",
            caption: "The user clicks a section to add detail to, and a popup opens with a form inside. The data is added to the profile in real time without need for reloading."
          },
          {
            link: "assets/images/projects/jba/jba3.png",
            caption: "The employer user can search for candidates by several parameters, or simply scroll through all job seekers with a completed online CV. They can then choose to look closer at the job seeker's profile, or open a chat conversation with the job seeker."
          },
          {
            link: "assets/images/projects/jba/jba4.png",
            caption: "Instant chat between employers and job seekers. Real time notifications appear using Pusher, and the conversation can be 'deleted' by the user if required."
          },
          {
            link: "assets/images/projects/jba/jba7.png",
            caption: "Re-skinning and customising pages as required for 'white label' corporate clients, such as Youthfull, Spark, Mainfreight, and Real Journeys."
          },
          {
            link: "assets/images/projects/jba/jba9.png",
            caption: "Creating interactive courses for job seekers from mockups. An Instructional Designer designs all content and interaction, which is then developed by myself and a front-end team utilising Vue.js. 38 Courses have been created in total."
          },
          
        ]
      }
    ]
    
  },
  methods: {
    fullScreenOpen: function(portfolio) {  
      var self = this;  
      self.showItem = portfolio;
      self.fullScreen = true;
       $(window).scrollTop(0);
      // if(this.clicked == 0) {
      //   this.fullScreen = true;
      //   this.clicked = 1;
      //   this.showMe = showMeNumber;
      //   // $(".slick-prev, .slick-next").addClass("hidden");
      //   // $(".slider-wrap").addClass("fixed-slider");
      //   // $(".slider").addClass("hAuto");
      //   // setTimeout(function(){
      //   //   var height = $(".slick-current").height();
      //   //   $(".fixed-slider").css("height", height);
      //   //   }, 1);
      //   // $("#home, #about, #contact, .prompt, .nav-mobile").hide();
      //   //
      // }
    },
    fullScreenClose: function() { 
        var container = $("#app"),
        scrollTo = $("#slider-section");
        this.fullScreen = false;
        this.clicked = 0;
        this.showMe = 0;
        $(".slider").removeClass("hAuto");
        setTimeout(function(){
          var height = $(".slick-current").height();
          $(".slider-wrap").css("height", height);
          }, 1);
         $(".slick-prev, .slick-next").removeClass("hidden");
         $(".slider-wrap").removeClass("fixed-slider");
         $("#home, #about, #contact, .prompt, .nav-mobile").show();
         container.scrollTop(
            scrollTo.offset().top - container.offset().top + container.scrollTop()
        );
    },
    navMob: function() {
      if(this.navShow == true) {
        this.navShow = false;
      }
      else {
        this.navShow = true;
      }
    }
  },
  ready: function() {
    var self = this;
    // $(function(){
    //   $(".name").typed({
    //         strings: ["Alexandra Dunham"],
    //         typeSpeed: 60,
    //         showCursor: false
    //     });
    //   setTimeout(function(){
    //             $(".title").typed({
    //         strings: ["Front end developer"],
    //         typeSpeed: 60,
    //         showCursor: false
    //     });
    //   },2000);

    // });

    // setTimeout(function(){
    //   $(".slider").slick({
    //     arrows: true,
    //     swipe: false, 

    //   });
    //   $(".slider").slick("slickGoTo", 0)
    // },1)

    

  }
});
