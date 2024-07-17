let intentos = 1;
let numSorteados = [];
let numMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numUsuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(intentos);
  if (numUsuario === numSecreto) {
    asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
    if (numUsuario > numSecreto) {
      asignarTextoElemento("p", 'El número secreto es menor');
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;

    limpiarCaja();
  }
  return;
};

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function numAleatorio() {
  let numGenerado = Math.floor(Math.random() * numMaximo) + 1;

  if (numSorteados.length == numMaximo) {
    asignarTextoElemento('p', "Ya salieron sorteados todos los números posibles");
  } else {
    if (numSorteados.includes(numGenerado)) {
      return numAleatorio();
    } else {
      numSorteados.push(numGenerado);
      return numGenerado;
    }
  }
  
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numMaximo}`);
  numSecreto = numAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled', 'true' );
}

condicionesIniciales();