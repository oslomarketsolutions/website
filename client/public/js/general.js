$(function () {
  function resize_iframe() {

      var height = window.innerWidth;//Firefox
      if (document.body.clientHeight) {
        height = document.body.clientHeight;//IE
      }
      //resize the iframe according to the size of the
      //window (all these should be on the same line)
      document.getElementById("glu").style.height = parseInt(height-
      document.getElementById("glu").offsetTop - 8) + "px";
  }

  // var norwegian = true;
  // if (window.location.pathname.indexOf('eng')) {
  //     norwegian = false;
  // }

  var windowWidth = $(window).width();
  if(windowWidth > 767){
    skrollr.init();
  } 


  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event){
      $(sideslider).toggleClass('fixed');
      $(sel).toggleClass('in');
      $(sel2).toggleClass('out');
  });


});

