
function CalcularValores() {
    var valLapis = document.getElementById('nLapis').value * 2.5;
    document.getElementById('textLapis').innerHTML = "  " + valLapis;

    var valRotu = document.getElementById('nRotu').value * 3.2;
    document.getElementById('textRotu').innerHTML = "  " + valRotu;

    var valLibr = document.getElementById('nLibr').value * 5.4;
    document.getElementById('textLibr').innerHTML = "  " + valLibr;

    document.getElementById('mensaje').innerHTML = "Valor total da compra: " + (valLapis + valRotu + valLibr);
}

function BorrarValores() {



    document.getElementById('textLapis').innerHTML = "";
    document.getElementById('nLapis').value = 0;
    document.getElementById('textRotu').innerHTML = "";
    document.getElementById('nRotu').value = 0;
    document.getElementById('textLibr').innerHTML = "";
    document.getElementById('nLibr').value = 0;
    document.getElementById('mensaje').innerHTML = "";



}