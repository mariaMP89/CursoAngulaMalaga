$(document).ready(function(){
    $.ajax({
        url:'https://ejemplo-d49a3.firebaseio.com/tareas.json',
        type:'GET',
        dataType:'json'
    }).done(function(datos){
        console.log(datos);
        for (var id in datos){
            $('#ajax').append(`<li>${datos[id].tarea}</li>`);
            // al poner este tipo de comillas dentro de un string se detecta que hay una variable
            //  $('#ajax').append(id);
        }
    }).fail(function(){
        console.log('ha ocurrido un error');
    });

    //$.post({
      //  url:'https://ejemplo-d49a3.firebaseio.com/tareas.json',
      //  data:JSON.stringify({tarea:'Una tarea nueva!'})
   // }).done(function(){
      //  console.log('se ha guardado correctamente');
   // }).fail(function(){
     //   console.log('Ha ocurrido un error');
        
    //});

    $('#contenido').load('datos/datos.txt');
    $.getJSON('datos/datos.json',function(datos){
        console.log(datos);
    });
});