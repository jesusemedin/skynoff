$('site-header').hide()
$('document').ready(function(){
    console.log("DOM loaded");

    $('.cargando').fadeOut('1000')

    //MENU
    $('.abrir-menu').on('click', function(){
        $('.site-header').hide();
        $('.menu-mobile').fadeIn(300);

      });
    $('.menu-mobile img').on('click', function(){
        $('.menu-mobile').fadeOut(300);
        $('.site-header').show();
    });
});