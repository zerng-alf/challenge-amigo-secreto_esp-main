let listaDeAmigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo').value;
  let lista = document.getElementById('listaAmigos');
  
  if (nombreAmigo.trim() === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }
  
  listaDeAmigos.push(nombreAmigo);
  
  // Llama a la función para actualizar la lista en el HTML
  mostrarListaDeAmigos();
  
  document.getElementById('amigo').value = '';
}

// Nueva función para mostrar la lista de amigos en el HTML
function mostrarListaDeAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpiar la lista anterior
  
  for (let i = 0; i < listaDeAmigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = listaDeAmigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert('Por favor, agrega amigos a la lista antes de sortear.');
    return;
  }
  
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[indiceAleatorio];
  
  let resultadoElemento = document.getElementById('resultado');
  
  // Se crea un pop-up que se ve mejor que un alert
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

// Nueva función para cerrar el pop-up
function cerrarPopUp() {
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = '';
}