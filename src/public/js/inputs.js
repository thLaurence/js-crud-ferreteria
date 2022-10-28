function cambio(){
    const inputMedida = document.getElementById('medida').value;
    const inputCajas = document.getElementById('cajas');
    if (inputMedida == "Cajas"){
        inputCajas.style.display = "inline";
        console.log("Funcionando")
    }else{
        inputCajas.style.display = "none";
    }

}
