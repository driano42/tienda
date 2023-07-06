$(".btnCargarDatos").click(function(){
    var idCliente = $(this).attr("idClientes");
    var datos = new FormData();
    datos.append("idCliente", idCliente);
    datos.append("edit", edit);
    console.log("Datos id",edit)

    $.ajax({
    url: "ajax/ajaxClientes.php", 
    method: "POST",
    data: datos,
    cache: false,
    contenType: false,
    processData: false,
    dataType: "json",
    success: function(respuesta){
        console.log("Datos json", respuesta);
    }
    });
    
})