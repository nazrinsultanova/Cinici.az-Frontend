 
 $(document).ready(function() {
    $(".all-orders-title").click(function(e){
        e.stopPropagation();
        $(".select").toggle();
    });


    $('.filter li').click(function() {
        $('.filter li').removeClass('selected');
        $(this).addClass('selected');
    });

    // $(".queue").click(function(e){
    //     e.stopPropagation();
    //     $(".queue-ul").toggle();
    // })

    $('.container').click(function(){
        $('.select').hide();
        $('.queue-ul').hide();
    });

    $(".dropdown-filter-item").click(function(event) {
        $(event.target).next().slideToggle( "slow", function() {
             
        });
    });

    $(".queue").click(function(e){
        e.stopPropagation();
        $(".queue-ul").slideToggle( "slow", function() {
             
          });
    });

    $('.size-radios .radio-wrapper').click(function() {
        $('.size-radios .radio-wrapper').removeClass('active');
        $(this).addClass('active');
       
    });


    $('.buy').click(function() {
        if($('.color input').is(':checked') && $('.radio-wrapper input').is(':checked') )
         {
            $(".alert").removeClass('flex-alert');
         }

         else{  
            $(".alert").addClass('flex-alert');
            // setTimeout(function(){
            //     $(".alert").removeClass('flex-start');
            //     },5000);
         } 
     });

     $('.exit-icon').click(function() {
        $(".alert").removeClass('flex-alert');
     });

     $('.registration-btn').click(function() {
        if($('.below-side input').is(':checked'))
         {
            $('.warning-box').css('visibility', 'hidden')
         }
    
         else{  
            $('.warning-box').css('visibility', 'visible')
         }   
     });


     $(".registration-btn").click(function(){
        $('.upper-side input').filter(function(){
            if ($.trim(this.value).length == 0) {
                $(this).css("border","0.1rem solid #E4013A");
                $(this).attr("placeholder", "Bu xana boş buraxıla bilməz");
                $(this).val('');
                $(this).addClass('pink-text');  
            }
            else {
                $(this).css("border","0.1rem solid #DCDCDC");
            }           
        });
    });
 

    /*--------Header menu hover--------*/
 
    $(".header-li").hover(function () {
        const activeClassName = 'active';

        $(this).children('.background-div').css('display', 'block');
        $(this).find('.dropdown-menu-container').css('display', 'flex');
        $(this).find('.dropdown-menu-content').css('height', 'min-content');
        $(this).find('.header-li > span').css('border-top', '0.1rem solid #272727');
        $(".age-filter-item").removeClass(activeClassName);
        $(".age-filter-item:first-child").addClass(activeClassName);
    });

    $(".header-li").mouseleave(function () {
        $(this).children('.background-div').css('display', 'none');
        $(this).find('.dropdown-menu-container').css('display', 'none');
        $(this).find('.dropdown-menu-content').css('height', '0rem');
        $(this).find('.header-li > span').css('border-top', '0.1rem solid #ffffff');
    });

    $(".header-li .dropdown-menu-content").mouseleave(function () {
        $(this).parent('.dropdown-menu-container').css('display', 'none');
    });

    $(".dropdown-menu-container").mouseleave(function () {
        $(this).parent('.background-div').css('display', 'none');
    });
    

    $(".age-filter-item").hover(function () {
        const className = 'active';
        if (!$(this).hasClass(className)) {
            $(".age-filter-item").removeClass(className);
            $(this).addClass(className);
        }
    })
 

    /*---------Header user-shopping-----------*/

    $(".user-li").hover(function () {
        const activeClassName = 'active-header';
        $('.shopping').removeClass(activeClassName);
        $(this).addClass(activeClassName);
    });

    $(".shopping").hover(function () {
        const activeClassName = 'active-header';
        $('.user-li').removeClass(activeClassName);
        $(this).addClass(activeClassName);
    });

    $(".header-top-right").mouseleave(function () {
        const activeClassName = 'active-header';
        $('.user-li').removeClass(activeClassName);
        $('.shopping').removeClass(activeClassName);
    });


 
    /*-----------Header search--------*/

    $('.search').click(function () {
        const activeClassName = 'active-class';
        $('.search-container').addClass(activeClassName);
    });

    $('.close-button').click(function (event) {
        event.stopPropagation();
        const activeClassName = 'active-class';
        $('.search-container').removeClass(activeClassName);
    });


    /*---------Mobile Menu------------*/

    $('.mobile-header-icons').click(function(){
        $(this).find('img').toggle();
        $(".grey-background").fadeToggle();
        $(".mobile-menu-container").animate({
            width: "toggle"
        });
    });
 
    $('.mobile-menu-li').click(function(){
        const activeClassName = 'active-li';
        $(this).addClass(activeClassName);
        $(this).find('.arrow-back').addClass('show-back');
        $(this).find('.arrow-next').addClass('hide-next');
        $(this).parent('.mobile-menu-ul').addClass('active-ul');
    });

    $('.arrow-back').click(function(event){
        event.stopPropagation();
        const activeClassName = 'active-li';
        $('.mobile-menu-li.active-li').removeClass(activeClassName);
        $(this).removeClass('show-back');
        $('.arrow-next').removeClass('hide-next');
        $('.mobile-menu-ul').removeClass('active-ul');
    });
 
    $('.inside-div').click(function(){
        const activeClassName_ul = 'active-inside-menu-ul';
        const activeClassName_li = 'active-inside-menu-li';
        $(this).addClass('active-inside-div');
        $('.inside-menu-ul').addClass(activeClassName_ul);
        $(this).parent('.inside-menu-li').addClass(activeClassName_li);
        $(this).siblings('.last-items').addClass('show-class');
        $('.mobile-menu-li.active-li').children('.menu-title').addClass('hide-menu-title');
        $(this).children('a').addClass('active-a');
    });

    $('.back').click(function(event){
        event.stopPropagation();
        const activeClassName_ul = 'active-inside-menu-ul';
        const activeClassName_li = 'active-inside-menu-li';
        $(this).parent('.inside-div').removeClass('active-inside-div');
        $(this).parent('.inside-div').siblings('.last-items').removeClass('show-class');
        $('.inside-menu-ul').removeClass(activeClassName_ul);
        $(this).parent('.inside-div').parent('.inside-menu-li').removeClass(activeClassName_li);
        $('.mobile-menu-li.active-li').children('.menu-title').removeClass('hide-menu-title');
        $(this).siblings('a').removeClass('active-a');
    });

    $('.submenu-title').click(function(){
        const ul_activeClassName = 'active-child-main-ul';
        const li_activeClassName = 'active-child-main-li';
        $(this).parent('.child-main-li').addClass(li_activeClassName);
        $('.child-main-ul').addClass(ul_activeClassName);
        $(this).addClass('active-submenu-title');
        $('.inside-div').addClass('hide-activity');
        $(this).children('.menu-back').addClass('show-menu-back');
        $('.inside-div.active-inside-div.hide-activity').children('a').addClass('hide-a');
    });

    $('.menu-back').click(function(event){
        event.stopPropagation();
        const ul_activeClassName = 'active-child-main-ul';
        const li_activeClassName = 'active-child-main-li';
        $(this).parent('.submenu-title').removeClass('active-submenu-title');
        $('.inside-div.active-inside-div.hide-activity').children('a').removeClass('hide-a');
        $('.child-submenu-ul').addClass('remove-submenu');
        $('.child-main-li').removeClass(li_activeClassName);
        $('.child-main-ul').removeClass(ul_activeClassName);
        $(this).removeClass('show-menu-back');
    });
})



// var menus = ['Qadin','Kişi', 'Uşaq'];
    
// names(menus);

// function names(menus) {
//     // for in
//     console.log('Salam');
//     names(menus.key);
// }

// // recursive function

// var Geyim = {
//     kateqoriya: 'Koynek'
// }

// var menus = {
//     count: 12,
//     Qadin : {
//         Geyim : {
//             kateqoriya: 'Koynek',
//             age: 12
//         }
//     },
//     Uşaq : {
//         '1-2yas' : {
//             Geyim: 'Koynek'
//         }
//     }
// }

// // for in
// menus.Qadin 
 

 