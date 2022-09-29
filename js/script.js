function suma (numero1, numero2,){
    var numero1= parseFloat(document.getElementById('numero1').value);
    var numero2= parseFloat(document.getElementById('numero2').value);

    var resultado=numero1+numero2;
    document.getElementById('signo').textContent = "+";
    document.getElementById('signor').textContent = "=";
    document.getElementById('resultado').value = resultado;
}

function resta (numero1, numero,){
    var numero1= parseFloat(document.getElementById('numero1').value);
    var numero2= parseFloat(document.getElementById('numero2').value);

    var resultado=numero1-numero2;
    document.getElementById('signo').textContent = "-";
    document.getElementById('signor').textContent = "=";
    document.getElementById('resultado').value = resultado;
}

function multiplicacion (numero1, numero2){
    var numero1= parseFloat(document.getElementById('numero1').value);
    var numero2= parseFloat(document.getElementById('numero2').value);

    var resultado=numero1*numero2;
    document.getElementById('signo').textContent = "*";
    document.getElementById('signor').textContent = "=";
    document.getElementById('resultado').value = resultado;
}

function divicion (numero1, numero2){
    var numero1= parseFloat(document.getElementById('numero1').value);
    var numero2= parseFloat(document.getElementById('numero2').value);

    var resultado=numero1/numero2;
    document.getElementById('signo').textContent = "/";
    document.getElementById('signor').textContent = "=";
    document.getElementById('resultado').value = resultado;
}

function borrar (){
    document.getElementById('numero1').value="";
    document.getElementById('numero2').value="";
    document.getElementById('signo').textContent = "";
    document.getElementById('signor').textContent = "";  
    document.getElementById('resultado').value="";
}