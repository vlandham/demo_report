$(window).load(function() {
  $('.image_link_thumb').hover(
    function() { $(this).addClass('hover').next().addClass('hover'); }, 
    function() { $(this).removeClass('hover').next().removeClass('hover'); }
    );

  $('#slider').coinslider({ width:670, height:400, delay:4000, effect:'straight', links:false, sDelay:10});
});

