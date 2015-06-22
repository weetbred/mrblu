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
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });



}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCJcblxuICAvL3BhbmVsXG4gICQoJyNzY290Y2gtcGFuZWwnKS5zY290Y2hQYW5lbCh7XG4gICAgY29udGFpbmVyU2VsZWN0b3I6ICdib2R5JyxcbiAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgZHVyYXRpb246IDMwMCxcbiAgICB0cmFuc2l0aW9uOiAnZWFzZScsXG4gICAgY2xpY2tTZWxlY3RvcjogJy5tZW51LWJ1dHRvbicsXG4gICAgZGlzdGFuY2VYOiAnNzAlJyxcbiAgICBlbmFibGVFc2NhcGVLZXk6IHRydWVcbiAgfSk7XG5cbiAgLy9uYXZcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgICAkKCdoZWFkZXIuZml4ZWQnKS5mYWRlSW4oMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnaGVhZGVyLmZpeGVkJykuZmFkZU91dCgzMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gYmFubmVyXG4gIHZhciB3aW5IZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICQoJy5oZXJvJykuY3NzKHtcbiAgICAnbWluLWhlaWdodCc6IHdpbkhlaWdodCxcbiAgfSk7XG5cbiAgJCh3aW5kb3cpLmJpbmQoXCJsb2FkIHJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuaGVybycpLmNzcyh7XG4gICAgICAnbWluLWhlaWdodCc6IHdpbkhlaWdodCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gbWVudSBidXR0b25cbiAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUJ1dHRvbicpO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG5cbiAgLy9zY3JvbGx0b1xuICAkKCdhW2hyZWYqPSNdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKVxuICAgICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgJHRhcmdldCA9ICR0YXJnZXQubGVuZ3RoICYmICR0YXJnZXRcbiAgICAgIHx8ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICBpZiAoJHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRhcmdldE9mZnNldCA9ICR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICAgICAkKCdodG1sLGJvZHknKVxuICAgICAgICAuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0YXJnZXRPZmZzZXR9LCAxMDAwKTtcbiAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG5cbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9