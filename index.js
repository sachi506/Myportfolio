$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-xmark');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-xmark');
      $('header').removeClass('toggle');
  
    //   if($(window).scrollTop() > 0){
    //     $('.top').show();
    //   }
    // else{
    //     $('.top').hide();
    //   }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  $('.per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });