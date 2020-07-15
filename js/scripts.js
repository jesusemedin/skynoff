$('site-header').hide()
$('document').ready(function(){
    $('.cargando').fadeOut('1000')
    console.log("DOM loaded");

    // MENU MOBILE
    $('.contacto').hide();
    $('.menu-contacto').hide();

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

    $('.btnContacto').on('click', function(){
        $('.site-header').hide();
        $('.trabajos-clientes').hide();
        $('.nuestra-gente').hide();
        $('.nosotros').hide();
        $('.site-footer').show();

        $('.menu-contacto').show();
        $('.menu-mobile').fadeOut(300);
        $('.contacto').show();
    })

    $('.menu-contacto').on('click', function(){
        $('.contacto').hide();
        $('.site-footer').hide();
        $('.contacto-mobile').fadeIn(300);
    })

    $('.contacto-mobile img').on('click', function(){
        $('.site-footer').show();
        $('.contacto').show();
        $('.contacto-mobile').fadeOut(300);
    })    

    $('.ir-inicio').on('click', function(){
        $('.contacto-mobile').fadeOut(300);
        $('.site-footer').show();
        $('.contacto').hide();
        $('.menu-contacto').hide();

                $('.site-header').show();
        $('.trabajos-clientes').show();
        $('.nuestra-gente').show();
        $('.nosotros').show();
        $('.abrir-menu').show();

    })
    // END MENU MOBILE FUNCTIONS
});