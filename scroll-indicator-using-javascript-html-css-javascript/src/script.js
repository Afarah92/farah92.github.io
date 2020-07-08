$(window).scroll(function() {
  
  var winTop = $(window).scrollTop(), 
      docheight = $(document).height(),
      winHeight = $(window).height();
  var scrolled = (winTop/(docheight-winHeight)) * 100;
  
  $('.scroll-line').css('width', (scrolled + '%' ));
});


