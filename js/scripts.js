$('site-header').hide()
$('document').ready(function(){
    $('.cargando').fadeOut('1000')
    console.log("DOM loaded");

    //MENU
    $('.abrir-menu').on('click', function(){
        $('.site-header').hide();
        $('.trabajos-clientes').hide();
        $('.nuestra-gente').hide();
        $('.nosotros').hide();
        $('.site-footer').hide();
        $('.menu-mobile').fadeIn(300);

      });
    $('.menu-mobile img').on('click', function(){
        $('.menu-mobile').fadeOut(300);
        $('.site-header').show();
        $('.trabajos-clientes').show();
        $('.nuestra-gente').show();
        $('.nosotros').show();
        $('.site-footer').show();
        
    });
});