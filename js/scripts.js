$('document').ready(function(){
    console.log("DOM loaded");

    //MENU
    $('.abrir-menu').on('click', function(){
        $('.abrir-menu').hide();
        $('.menu-mobile').fadeIn(300);

      });
    $('.menu-mobile img').on('click', function(){
        $('.menu-mobile').fadeOut(300);
        $('.abrir-menu').show();
    });
});