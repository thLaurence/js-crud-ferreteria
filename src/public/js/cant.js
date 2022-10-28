const { default: swal } = require("sweetalert");

function cantidad(){
    maximo = document.getElementById('maximo');
    cantidadVender = document.getElementById("cant");
    inputCantidadVendida = document.getElementById('cantidad_vendida');
    valor = document.getElementById('valor').value;
    total = document.getElementById('valor_total');
    

    //APLICANDO LA CANTIDAD A VENDER
    if(Math.abs(cantidadVender.value) > maximo.value){
        swal("Problemas!", "No posee suficiente inventario para realizar la venta", "error");
        cantidadVender.value = null;
    }else if(Math.abs(cantidadVender.value) <= maximo.value){
        inputCantidadVendida.value = cantidadVender.value;
        total.value = cantidadVender.value * valor;
    }
}

function completado(){
    swal("Venta Realizada", "La venta ha sido realizada con éxito", "success");
}

function eliminadoInv(){
    swal("Eliminado", "El elemento ha sido eliminado con éxito", "success");
}