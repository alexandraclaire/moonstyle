Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    $(el)
      .css('opacity', 0)
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
  el: '#app',
  data: {
    loaded: true,
    fullScreen:false,
    clicked:0,
    showMe: 0,
    portfolio: [
      {
        name:'The New Zealand Herald x Heart of the City',
        byline:'Interactive Microsite',
        mainImage: 'assets/images/projects/lovebites/lovebites1.png',
        scope: [
          '50 quiz questions in total.', 'A landing page which randomised 3 questions on each load for the user to choose from.', 'Capture data from the user for marketing purposes.', 'Mobile responsive.', 'Embedded videos for each question.', 'Compatible with all modern browsers.'
        ],
        images: [
          {
            link: 'assets/images/projects/lovebites/fullpage.jpg',
            caption: 'On load, users are show 3 randomised question choices, which they click to open.'
          },
          {
            link: 'assets/images/projects/lovebites/fullpage.jpg',
            caption: 'Users must watch the video and answer the question below, before proceeding to enter their details.'
          },
          { 
            link: 'assets/images/projects/lovebites/fullpage2.jpg',
            caption: ''
          },
          {
            link: 'assets/images/projects/lovebites/lovebites5.png',
            caption: 'Users can see more videos and start the process again, for all 50 videos. They can enter once daily.'
          }
        ]
      },
      {
        name:'#ASBFarmsmarts',
        byline:'NZHerald online campaign',
        mainImage: 'assets/images/projects/farmsmart/farmsmart1.jpg',
        scope: [
          'Embedded campaign inside nzherald.co.nz', 'Use Wayin EngageSciences software', 'Custom front-end template and interaction to work with software', 'Social media aggregator to collect posts and user data', 'Article post feed'
        ],
        images: [
          {
            link: 'assets/images/projects/farmsmart/farmsmart2.jpg',
            caption: 'ASB teamed up with "How to dad" to create custom content for this campaign'
          },
          {
            link: 'assets/images/projects/farmsmart/farmsmart3.jpg',
            caption: 'A social media aggregator pulled in Instagram and Facebook content with the hashtag "#ASBFarmsmarts", moderated by the campaign manager. Users can "vote" for their favourite content'
          }
        ]
      }
    ]
    
  },
  methods: {
    fullScreenOpen: function(showMeNumber) {  
      var self = this;  
      if(this.clicked == 0) {
        this.fullScreen = true;
        this.clicked = 1;
        this.showMe = showMeNumber;
        $('.slick-prev, .slick-next').addClass('hidden');
        $('.slider-wrap').addClass('fixed-slider');
        setTimeout(function(){
          var height = $('.slick-current').height();
          $('.fixed-slider').css('height', height);
          }, 1);
        $('#home, #about, #contact').hide();
        $(window).scrollTop(0);
      }
    },
    fullScreenClose: function() { 
        var container = $('#app'),
        scrollTo = $('#slider-section');
        this.fullScreen = false;
        this.clicked = 0;
        this.showMe = 0;
        setTimeout(function(){
          var height = $('.slick-current').height();
          $('.slider-wrap').css('height', height);
          }, 1);
         $('.slick-prev, .slick-next').removeClass('hidden');
         $('.slider-wrap').removeClass('fixed-slider');
         $('#home, #about, #contact').show();
         container.scrollTop(
            scrollTo.offset().top - container.offset().top - 100
        );
    }
  },
  ready: function() {
    var self = this;
    $(function(){
        $(".name").typed({
            strings: ["Alexandra Dunham"],
            typeSpeed: 100,
            showCursor: false,
            onStringTyped: function() {
              setTimeout(function(){
                self.loaded = false;
              },1000);
            }
        });
    });

    setTimeout(function(){
      $('.slider').slick({
        arrows: true
      });
      $('.slider').slick('slickGoTo', 0)
    },1)

    

  }
});
