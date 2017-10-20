

function CalcularValores() {


    var val1 = document.getElementById('n1').value;
    var val2 = document.getElementById('n2').value;
    var val3 = document.getElementById('n3').value;

    var tabla = 0;
    var cont = 0;
    for(var i = parseInt(val2); i <= parseInt(val3);i++){
        tabla = val1 * i;
        document.getElementById('mensaje').innerHTML += val1 + " * " + (parseInt(val2)+cont++) + " = " + tabla + "<br />";

    }
    document.getElementById('borrarButtom').disabled = false;
    document.getElementById('calcButton').disabled = true;

    var frases = Array();

    frases[0] = "cada vez mejor";
    frases[1] = "Buenos dias todos los dias";
    frases[2] = "Antes tarde que nunca";
    frases[3] = "no he estudiado, ahora me faltan cosas";


    var aleatoria =parseInt((Math.round(frases.length-1)*Math.random()+1));



    document.getElementById('txtFra').innerHTML = "La frase sorteada es " + frases[aleatoria];




}

function BorrarValores() {

    document.getElementById('mensaje').innerHTML = "";
    document.getElementById('n1').value = 0;
    document.getElementById('n2').value = 0;
    document.getElementById('n3').value = 0;

    document.getElementById('borrarButtom').disabled = true;
    document.getElementById('calcButton').disabled = false;

}