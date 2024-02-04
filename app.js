let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento()
{
    let numerodeUsuario=parseInt(document.getElementById('valorUsuario').value);//parseInt convierte el string a number
    
    //console.log(typeof(numeroSecreto));//me devuelve el tipo de dato
    //console.log(numeroSecreto);
    if(numerodeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //Cuando el usuario no acierta
        if(numerodeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        limpiarCaja();
        intentos++;
    }
    
    //console.log(numerodeUsuario === numeroSecreto);
    //=== es igual en valor e igual en tipo de dato
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(aleatorio=Math.random()*numeroMaximo)+1;
    //Sí sorteamos todos los números
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        
    }else{
         //Si el número generado está incluído en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Inicializar el número de intentos
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


