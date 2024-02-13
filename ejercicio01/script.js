//Forma de modificar el DOM con JS

/* let parrafo = document.getElementById("texto");

parrafo.addEventListener("click", function(){
    document.write('Haz click sobre este elemento')
}) */

//forma de llamarlo con JQuery
jQuery(document).ready(function(){
    
    /* let texto = $("#texto"); */
    
$("#texto").click(function(){
    document.write("Haz click sobre este elemento");
})
    
    //por clase
    let parrafo = $('.parrado')
    console.log(parrafo);

    //por id
    let input = $('#entrada')

    //Por tag
    let button = $('button')

})