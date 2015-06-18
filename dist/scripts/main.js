(function() {
  "use strict"

  //panel
  $('#scotch-panel').scotchPanel({
    containerSelector: 'body',
    direction: 'right',
    duration: 300,
    transition: 'ease',
    clickSelector: '.menu-button',
    distanceX: '70%',
    enableEscapeKey: true
  });

  //nav
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('nav').fadeIn(200);
    } else {
      $('nav').fadeOut(300);
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

  // menu button
  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    menuButton.classList.toggle('is-active');
  });

}());