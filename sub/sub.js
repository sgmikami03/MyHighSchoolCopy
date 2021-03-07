$(function(){
    $('.menu__item__link').click(function(){
      var $submenu  = $(this).siblings('.submenu');

      if ($submenu.hasClass('open')){
        $submenu.slideUp();
        $submenu.removeClass('open');
      }else{
        $submenu.slideDown();
        $submenu.addClass('open');
      }
    });
});
