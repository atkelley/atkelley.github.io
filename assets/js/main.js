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
    $('#portfolio-container').animatescroll({padding: 100});
  })

  $('#contact').click(function(){
    if(navigator.userAgent.search(/webkit/i)>0) { // Chrome, Safari
      $('#contact-container').animatescroll({padding: 25});
    } else if(navigator.userAgent.search(/gecko/i)>0) { // Firefox
      $('#contact-container').animatescroll({padding: 0});
    } else if(navigator.userAgent.search(/???/i)>0){  // Others
      $('#contact-container').animatescroll({padding:0});
    } 
  });
}   

$(document).ready(function(){
  setScrollingEvent();
});


