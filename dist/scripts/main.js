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
    if ($(this).scrollTop() > 300) {
      $('header.fixed').fadeIn(200);
    } else {
      $('header.fixed').fadeOut(300);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiXG5cbiAgLy9wYW5lbFxuICAkKCcjc2NvdGNoLXBhbmVsJykuc2NvdGNoUGFuZWwoe1xuICAgIGNvbnRhaW5lclNlbGVjdG9yOiAnYm9keScsXG4gICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgdHJhbnNpdGlvbjogJ2Vhc2UnLFxuICAgIGNsaWNrU2VsZWN0b3I6ICcubWVudS1idXR0b24nLFxuICAgIGRpc3RhbmNlWDogJzcwJScsXG4gICAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlXG4gIH0pO1xuXG4gIC8vbmF2XG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgJCgnaGVhZGVyLmZpeGVkJykuZmFkZUluKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2hlYWRlci5maXhlZCcpLmZhZGVPdXQoMzAwKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGJhbm5lclxuICB2YXIgd2luSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAkKCcuaGVybycpLmNzcyh7XG4gICAgJ21pbi1oZWlnaHQnOiB3aW5IZWlnaHQsXG4gIH0pO1xuXG4gICQod2luZG93KS5iaW5kKFwibG9hZCByZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmhlcm8nKS5jc3Moe1xuICAgICAgJ21pbi1oZWlnaHQnOiB3aW5IZWlnaHQsXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIG1lbnUgYnV0dG9uXG4gIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVCdXR0b24nKTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuXG4gIC8vc2Nyb2xsdG9cbiAgJCgnYVtocmVmKj0jXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJylcbiAgICAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICB2YXIgJHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICR0YXJnZXQgPSAkdGFyZ2V0Lmxlbmd0aCAmJiAkdGFyZ2V0O1xuICAgICAgaWYgKCR0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgIHZhciB0YXJnZXRPZmZzZXQgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtNzU7XG4gICAgICAgICQoJ2h0bWwsYm9keScpXG4gICAgICAgIC5hbmltYXRlKHtzY3JvbGxUb3A6IHRhcmdldE9mZnNldH0sIDEwMDApO1xuICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cblxufSgpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=