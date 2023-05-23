$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })

    // $('#telefone').mask('(00) 00000-0000');

    $('#telefone').mask('SSS-0000', {
        placeholder: 'ABC-1234'
    });
})