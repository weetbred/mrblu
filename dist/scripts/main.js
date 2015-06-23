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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCJcblxuICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnV0dG9uJyk7XG5cbiAgLy9wYW5lbFxuICAkKHdpbmRvdykuYmluZChcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgJCgnaGVhZGVyLmZpeGVkJykuZmFkZUluKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2hlYWRlci5maXhlZCcpLmZhZGVPdXQoMzAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vcGFuZWxcbiAgdmFyIHNjb3RjaFBhbmVsID0gJCgnI3Njb3RjaC1wYW5lbCcpLnNjb3RjaFBhbmVsKHtcbiAgICBjb250YWluZXJTZWxlY3RvcjogJ2JvZHknLFxuICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIHRyYW5zaXRpb246ICdlYXNlJyxcbiAgICBkaXN0YW5jZVg6ICc3MCUnLFxuICAgIGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcbiAgfSk7XG5cblxuXG4gICQoJyNtZW51QnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzY290Y2hQYW5lbC50b2dnbGUoKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgJCgnLnBhbmVsLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIHNjb3RjaFBhbmVsLmNsb3NlKCk7XG4gIH0pO1xuXG4gICQoJyNzY290Y2gtcGFuZWwgdWwgbGkgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgc2NvdGNoUGFuZWwuY2xvc2UoKTtcbiAgfSk7XG5cbiAgJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcbiAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBiYW5uZXJcbiAgdmFyIHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgJCgnLmhlcm8nKS5jc3Moe1xuICAgICdtaW4taGVpZ2h0Jzogd2luSGVpZ2h0LFxuICB9KTtcblxuICAkKHdpbmRvdykuYmluZChcImxvYWQgcmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5oZXJvJykuY3NzKHtcbiAgICAgICdtaW4taGVpZ2h0Jzogd2luSGVpZ2h0LFxuICAgIH0pO1xuICB9KTtcblxuICAvL3Njcm9sbHRvXG4gICQoJ2FbaHJlZio9I10nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpXG4gICAgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgdmFyICR0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAkdGFyZ2V0ID0gJHRhcmdldC5sZW5ndGggJiYgJHRhcmdldDtcbiAgICAgIGlmICgkdGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgdGFyZ2V0T2Zmc2V0ID0gJHRhcmdldC5vZmZzZXQoKS50b3AgLTc1O1xuICAgICAgICAkKCdodG1sLGJvZHknKVxuICAgICAgICAuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0YXJnZXRPZmZzZXR9LCAxMDAwKTtcbiAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9