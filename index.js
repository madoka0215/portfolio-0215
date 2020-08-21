$(function(){
  
  $('.link a').hover(
    function(){
      $(this).animate({
        'font-size': '20px'
        }, 300);
    },
    function(){
      $(this).animate({
        'font-size': '16px'
      }, 300);
    }
  );
  
  $('.contact-wrapper a').hover(
    function(){
      $(this).animate({
        'font-size': '50px'
        }, 300);
    },
    function(){
      $(this).animate({
        'font-size': '40px'
      }, 300);
    }
  );
  
  $('.top-btn').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 500);
  })
  
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  })
  
});
  