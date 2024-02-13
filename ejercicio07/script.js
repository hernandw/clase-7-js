$(document).ready(function () {


    let valor = $('select')
    console.log()

    valor.on("change", function () {
        
        let opcionSeleccionada = $(this).val()
        
         $('.resultado').html(`Has seleccionado ${opcionSeleccionada}`)
    })
    
});
