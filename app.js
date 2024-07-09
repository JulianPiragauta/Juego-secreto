let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*
    console.log(typeof(numeroDeUsuario))
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto)
    */
    console.log(intentos);


    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero, en: ${intentos} ${(intentos === 1)? "vez" : "veces"}` );
        limpiarCaja();
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El Numero es Menor');
        }else{
            asignarTextoElemento('p','El Numero es Mayor');
        }
        intentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value='';
    
    /*
    otra forma de hacerlo

    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value='';
    */
}
function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista hace a, sino hace b (puedo jugar)

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se Sortearon los Numeros Posibles');
    }else{
         if (listaNumerosSorteados.includes(numeroGenerado)){
            return  generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    intentos = 1;
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Porfavor Dime un Numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
}
function reiniciarJuego(){
    //limpiar juego
    limpiarCaja();
    //reiniciar titulos
    //reiniciar juego
    //reiniciar nuemero aleatorio
    condicionesIniciales();
    //deshabilitar boto nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //iniciar nuevamente intentos
}

condicionesIniciales();

