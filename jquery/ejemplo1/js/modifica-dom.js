$(document).ready(function(){
    //Modificamos el texto del primer título
    $('#temario-curso').text('Titulo1');

    //permite pulsar el boton
    $('button').removeAttr('disabled');
    //ocultamos las etiquetas h1
    $('h1').hide();
    // mostrar a los 3 seg los h1
    setTimeout(function(){
        $('h1').fadeIn(3000);
    },3000);

    //eliminar el ultimo elemento li
    $('li:last').remove();

    ///Añade la clase al elemento h2
    $('h2').addClass('borde');
    //para vaciar el ul se usa lo siguiente
    $('ul').empty();
    //Para añadir un elemento li al ul 
    $('ul').append('<li>Elemento1</li>');
    $('ul').prepend('<li>Elemento2</li>');
    //muestra el texto de cada etiqueta p
    $.each($('p'),function(posicion,elemento){
       console.log($(elemento).text());
    });
  
});