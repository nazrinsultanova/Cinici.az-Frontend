$(document).ready(function(){
  $('.home-content').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.white-circle-left'),
    nextArrow: $('.white-circle-right'),
    autoplay:  false,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

$('.flex-container-third').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  prevArrow: $('.slider-part-left'),
  nextArrow: $('.slider-part-right'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
            centerMode: true,
        }
    },
    {
      breakpoint: 480,
      settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
      }
    }
  ]
});
 
 


  $('.zoom-right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.zoom-left'
});

$('.zoom-left').slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.zoom-right',
    dots: false,
    arrows: true,
  
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                vertical: false,
                arrows: false,
                centerPadding: '10px'
            }
        }
    ]
});



$('.flex').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 600,
          settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
          }
      },
      {
          breakpoint: 480,
          settings: {
              dots: false,
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1
          }
      }
  ]
});
 
})