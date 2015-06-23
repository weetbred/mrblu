(function() {
  "use strict"

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiXG5cbiAgLy9wYW5lbFxuICAkKHdpbmRvdykuYmluZChcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgJCgnaGVhZGVyLmZpeGVkJykuZmFkZUluKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2hlYWRlci5maXhlZCcpLmZhZGVPdXQoMzAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vcGFuZWxcbiAgdmFyIHNjb3RjaFBhbmVsID0gJCgnI3Njb3RjaC1wYW5lbCcpLnNjb3RjaFBhbmVsKHtcbiAgICBjb250YWluZXJTZWxlY3RvcjogJ2JvZHknLFxuICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIHRyYW5zaXRpb246ICdlYXNlJyxcbiAgICBkaXN0YW5jZVg6ICc3MCUnLFxuICAgIGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcbiAgfSk7XG5cbiAgJCgnI21lbnVCdXR0b24nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjb3RjaFBhbmVsLnRvZ2dsZSgpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICAkKCcucGFuZWwtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgc2NvdGNoUGFuZWwuY2xvc2UoKTtcbiAgfSk7XG5cbiAgJCgnI3Njb3RjaC1wYW5lbCB1bCBsaSBhJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBzY290Y2hQYW5lbC5jbG9zZSgpO1xuICB9KTtcblxuICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGJhbm5lclxuICB2YXIgd2luSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAkKCcuaGVybycpLmNzcyh7XG4gICAgJ21pbi1oZWlnaHQnOiB3aW5IZWlnaHQsXG4gIH0pO1xuXG4gICQod2luZG93KS5iaW5kKFwibG9hZCByZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmhlcm8nKS5jc3Moe1xuICAgICAgJ21pbi1oZWlnaHQnOiB3aW5IZWlnaHQsXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vc2Nyb2xsdG9cbiAgJCgnYVtocmVmKj0jXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJylcbiAgICAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICB2YXIgJHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICR0YXJnZXQgPSAkdGFyZ2V0Lmxlbmd0aCAmJiAkdGFyZ2V0O1xuICAgICAgaWYgKCR0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0YXJnZXRPZmZzZXQgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtNzU7XG4gICAgICAgICQoJ2h0bWwsYm9keScpXG4gICAgICAgIC5hbmltYXRlKHtzY3JvbGxUb3A6IHRhcmdldE9mZnNldH0sIDEwMDApO1xuICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSgpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=