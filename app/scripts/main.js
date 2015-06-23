(function() {
  "use strict"

  var menuButton = document.getElementById('menuButton');

  //panel
  $(window).bind("scroll", function() {
    if ($(this).scrollTop() > 300) {
      $('header.fixed').fadeIn(200);
    } else {
      $('header.fixed').fadeOut(300);
    }
  });

  //panel
  var scotchPanel = $('#scotch-panel').scotchPanel({
    containerSelector: 'body',
    direction: 'right',
    duration: 300,
    transition: 'ease',
    distanceX: '70%',
    enableEscapeKey: true,
  });



  $('#menuButton').click(function(e) {
    e.preventDefault();
    scotchPanel.toggle();
    menuButton.classList.toggle('is-active');
    return false;
  });

  $('.panel-overlay').click(function() {
    menuButton.classList.toggle('is-active');
    scotchPanel.close();
  });

  $('#scotch-panel ul li a').click(function() {
    menuButton.classList.toggle('is-active');
    scotchPanel.close();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      menuButton.classList.toggle('is-active');
    }
  });

  // banner
  var winHeight = $(window).height();
  $('.hero').css({
    'min-height': winHeight,
  });

  $(window).bind("load resize", function() {
    $('.hero').css({
      'min-height': winHeight,
    });
  });

  //scrollto
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target;
      if ($target.length) {
        var targetOffset = $target.offset().top -75;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
}());