// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
  // 1. Capturar el valor del campo de entrada
  let nombreAmigo = document.getElementById('amigo').value;
  
  // 2. Validar la entrada
  if (nombreAmigo.trim() === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }
  
  // 3. Actualizar el array de amigos
  listaDeAmigos.push(nombreAmigo);
  console.log(listaDeAmigos); // Opcional: para verificar en la consola que se agregó el nombre
  
  // 4. Limpiar el campo de entrada
  document.getElementById('amigo').value = '';
}

function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (listaDeAmigos.length === 0) {
    alert('Por favor, agrega amigos a la lista antes de sortear.');
    return;
  }
  
  // 2. Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  
  // 3. Obtener el nombre sorteado
  let amigoSorteado = listaDeAmigos[indiceAleatorio];
  
  // 4. Mostrar el resultado
  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = `<p>${amigoSorteado}</p>`;
}