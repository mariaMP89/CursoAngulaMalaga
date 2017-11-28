$(document).ready(function(){
    $('img').on('mouseover', function(e){
        console.log(e);
        console.log('El raton esta sobre la imagen');
    });
    $('add-btn').on('click',function(){
        $('#contenido').append('<button type="button" class="btn">Un botoncito</button>');
    });

    $(document).on('click','btn',
     function(){
        console.log('ESe detecta 2');
    });
});