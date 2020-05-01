function setScrollingEvent(){
  $('#intro').click(function(){
      $('#intro-container').animatescroll({padding: 200});
  });

  $('#about').click(function(){
      $('#about-container').animatescroll({padding: 150});
  });

  $('#skills').click(function(){
      $('#skills-container').animatescroll({padding: 100});
  });

  $('#portfolio').click(function(){
      $('#portfolio-container').animatescroll({padding: 50});
  })

  $('#contact').click(function(){
      $('#contact-container').animatescroll({padding: 25});
  });
}   

$(document).ready(function(){
  setScrollingEvent();
});


