$(document).ready(function(){
    console.log($('h1:contains("jQuery")'));//Obtiene todas las etiquetas h1 uque contiene 'jQuery'
    console.log($('a:even'));//Obtiene todas las etiquetas a que estan en una posicion par
    console.log($('ul li:first-child')); //Obtiene el primer li
    console.log($('li:eq(0)'));//obtener el primer li desde la posicion 0
    console.log($('li').not('.enlace'));//obtener todo lo qu eno tenga la CLASE enlace
});