function escribePierde() {
    escribir = document.getElementById("nota")
    escribir.innerHTML = "Pokemon incorrecto, la respuesta correcta es: excadrill"
}

function escribeGana() {
    escribir = document.getElementById("nota")
    escribir.innerHTML = "Felicitaciones, has seleccionado la opción correcta!"
}

function mostrarPokemon() {
    //display: none, block
    var valorDisplay = document.getElementById("imgPokemon").src;
    console.log(valorDisplay)
    if (valorDisplay.match('../img/pnegro.jpg')) {
        valorDisplay = '../img/pColor.jpg';
    }
    document.getElementById("imgPokemon").src = valorDisplay;
}

function ocultarPokemon() {
    //display: none, block
    var valorDisplay = document.getElementById("imgPokemon").src;
    if (valorDisplay.match('../img/pcolor.jpg')) {
        valorDisplay = '../img/pnegro.jpg';
    } else {
        valorDisplay = '../img/pnegro.jpg';
    }
    document.getElementById("imgPokemon").src = valorDisplay;
}

function ocultarTexto() {
    //display: none, block
    escribir = document.getElementById("nota")
    escribir.innerHTML = ""
}

function cambiarEstilo1(){
    var valorActualId = document.getElementById("textoInicial").style.color='yellow';
}

function cambiarEstilo2(){
    var valorActualId = document.getElementById("textoInicial").style.color='red';
}

function cambiarEstilo3(){
    var valorActualId = document.getElementById("textoInicial").style.color='black';
}

