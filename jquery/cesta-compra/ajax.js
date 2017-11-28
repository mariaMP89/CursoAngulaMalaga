$(document).ready(function(){
    $.listaProductos({
        url:'https://jquery-lista-compra.firebaseio.com/productos.json',
        type:'GET',
        dataType:'json'
    }).done(function(datos){
        
        for (var id in datos){
            $('#listaProductos').append(`<li>${datos[id].lista}</li>`);
        
        }
    }).fail(function(){
        console.log('ha ocurrido un error');
    });

});