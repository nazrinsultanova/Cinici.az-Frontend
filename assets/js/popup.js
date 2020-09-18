$(document).ready(function () {

$('.zoom-right').click(function(){
    $('.pop-up-container').fadeIn();
});

$('.close-full-view').click(function () {
    $('.pop-up-container').fadeOut();
})

var sections = $('section'), 
    full_imgs = $('.full-view-images'),
    slide_items = $('.slide-images-content'),
    nav_height = 150;
 
$(window).on('scroll', function () {
    var x;
    var cur_pos = $(this).scrollTop();
    var screen_height = $(window).height();
    var screen_height = screen_height - nav_height;
    var small_slider = $('.slide-images-container').outerHeight();
    var pop_up = $('.pop-up-container').outerHeight();
    var slider_top_distance = 200;
    
    

    x = slider_top_distance - cur_pos * (small_slider - (screen_height - slider_top_distance)) / pop_up;
 
    sections.each(function() {
        var top = $(this).offset().top - nav_height;
        var bottom = top + $(this).outerHeight();
     
        if (cur_pos >= top && cur_pos <= bottom) {
            slide_items.find('.slide-item').removeClass('active');
            sections.removeClass('active');
 
            $(this).addClass('active');
            slide_items.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
        $('.slide-images-container').css('top', x);
 
    });
});


slide_items.find('a').on('click', function () {
    var $el = $(this),
    id = $el.attr('href');
  
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
    return false;
 });
});

//         // console.log($('.main-item.active').outerHeight());
//         // console.log('Top', $('.main-item.active').offset().top);
//         // console.log($(window).scrollTop());
//         // console.log('this',$(this).offset().top); 
//         // console.log('cur_pos',cur_pos);
 
 
 