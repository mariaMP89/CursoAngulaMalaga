$(document).ready(function(){
    console.log($('h1'));//Obtiene todas las etiquetas h1
    console.log($('ul a'));//Obtiene todas las etiquetas a descendiente de ul
    console.log($('ul > li > a')); //Obtiene todas las etiquetas a hijas de las etiquetas li qie son hijas de ul como la anterior
    console.log($('h1#temario-jQuery'));//Obtiene todas las etiquetas que tiene el id temario-jquery
    console.log($('#temario-jQuery'));//Obtiene todas las etiquetas que tiene id temario.jQuery comola de antes
    console.log($('h1 ~ p'));//Obtiene todas las etiquetas p que se encuentran al mismo nivel que la etiqueta h1
    console.log($('h1 + p'));//Obtiene todas las etiquetas  p que se encuentran justo despues de la etiqueta h1
    console.log($('a, p'));//Obtiene todas las etiquetas a y p
});