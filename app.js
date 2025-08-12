// Variable global para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtiene el valor del campo de texto y elimina espacios en blanco
  let nombreAmigo = document.getElementById('amigo').value.trim();
  
  // 1. Valida si el campo está vacío
  if (nombreAmigo === '') {
    alert('Por favor, inserte un nombre.');
    return; // Detiene la ejecución si el campo está vacío
  }
  
  // 2. Valida si el nombre ya existe en la lista
  if (listaDeAmigos.includes(nombreAmigo)) {
    alert('Este nombre ya está en la lista. Por favor, ingrese un nombre diferente.');
    return; // Detiene la ejecución si el nombre está duplicado
  }
  
  // Agrega el nombre al arreglo
  listaDeAmigos.push(nombreAmigo);
  
  // Actualiza la lista visual en el HTML y el contador
  mostrarListaDeAmigos();
  
  // Limpia el campo de entrada
  document.getElementById('amigo').value = '';
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaDeAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpia el contenido anterior de la lista

  // Actualiza el contador de amigos
  let contadorElemento = document.getElementById('contador');
  if (contadorElemento) {
    contadorElemento.textContent = listaDeAmigos.length;
  }

  // Recorre el arreglo de amigos y crea un <li> para cada uno
  for (let i = 0; i < listaDeAmigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = listaDeAmigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto de forma aleatoria
function sortearAmigo() {
  // Valida que haya amigos en la lista antes de sortear
  if (listaDeAmigos.length === 0) {
    alert('Por favor, agrega amigos a la lista antes de sortear.');
    return;
  }
  
  // Genera un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  
  // Obtiene el nombre del amigo sorteado
  let amigoSorteado = listaDeAmigos[indiceAleatorio];
  
  // Muestra el resultado en un pop-up con un diseño mejor
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = `
    <div class="pop-up">
      <div class="pop-up-content">
        <span class="close-button" onclick="cerrarPopUp()">&times;</span>
        <h2>🎉 ¡Felicidades! 🎉</h2>
        <p>El amigo secreto es:</p>
        <h3>${amigoSorteado}</h3>
      </div>
    </div>
  `;
}

// Función para cerrar el pop-up
function cerrarPopUp() {
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = '';
}

// Función para reiniciar el juego
function reiniciarJuego() {
  // Limpia el arreglo de amigos
  listaDeAmigos = [];

  // Limpia la lista visual de amigos en el HTML
  document.getElementById('listaAmigos').innerHTML = '';
  
  // Limpia el resultado del sorteo
  document.getElementById('resultado').innerHTML = '';
  
  // Reinicia el contador de amigos
  let contadorElemento = document.getElementById('contador');
  if (contadorElemento) {
    contadorElemento.textContent = '0';
  }
}