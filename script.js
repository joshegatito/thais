// Variables para gestionar el estado de aceptación y rechazo
let aceptado = false;  // Indica si la propuesta ha sido aceptada
let rechazado = false; // Indica si la propuesta ha sido rechazada
let textoNoBoton = "No"; // Texto del botón de rechazo
let ultimoIndiceRechazado = -1; // Último índice de rechazo para evitar repeticiones

// Mensajes para mostrar en caso de rechazo
const textosDeRechazo = [
  "¿Aún no estás segura?",
  "¡Piensa en lo especial que puede ser!",
  "¡No te lo pierdas!",
  "¡Una sorpresa te espera!"
];

// Función para manejar la aceptación de la propuesta
function manejarAceptacion() {
  aceptado = true;
  actualizarInterfaz();
}

// Función para manejar el rechazo de la propuesta
function manejarRechazo() {
  rechazado = true;
  let indiceAleatorio;
  do {
    // Elegir un índice aleatorio para el texto de rechazo
    indiceAleatorio = Math.floor(Math.random() * textosDeRechazo.length);
  } while (indiceAleatorio === ultimoIndiceRechazado);

  // Actualizar el último índice rechazado
  ultimoIndiceRechazado = indiceAleatorio;
  textoNoBoton = textosDeRechazo[indiceAleatorio];
  actualizarInterfaz();
}

// Función para reproducir la música
function reproducirMusica() {
  const audio = document.getElementById('musica');
  audio.play().catch(error => {
    console.log('Error al intentar reproducir el audio:', error);
  });
}

// Función para actualizar la interfaz de usuario
function actualizarInterfaz() {
  const cuerpoApp = document.querySelector('#app');
  const gifFloroso = 'michicito.gif';  // GIF para la aceptación
  const gifOsoEnfadado = 'amor.gif'; // GIF para el rechazo
  const gifBesos = 'besos.gif';        // GIF para el mensaje de éxito

  if (aceptado) {
    // Mostrar mensaje de éxito si la propuesta ha sido aceptada
    cuerpoApp.innerHTML = `
      <div class="Aplicacion-exito">
        <img class="Aplicacion-gif" src="${gifBesos}" alt="Besos" />
        <p class="Aplicacion-texto-exito">
          A veces la vida nos presenta desafíos, pero eso nunca cambia lo profundo que es mi amor por ti. En cada momento difícil, sigues siendo mi Michicita, a quien pienso y amo con todo mi corazón.
        </p>
        <p class="Aplicacion-texto-exito">
          Espero que este 1 de agosto, Día de las Novias, esté lleno de alegría y amor para ti, mi querida Michicita. Que sea un día tan especial como tú.
        </p>
        <p class="Aplicacion-texto-fecha">01/08/2024</p>
      </div>
    `;
  } else if (rechazado) {
    // Mostrar mensaje de espera si la propuesta ha sido rechazada
    cuerpoApp.innerHTML = `
      <div class="Aplicacion-cuerpo">
        <h1>Michicito Esperando</h1>
        <img class="Aplicacion-gif" src="${gifOsoEnfadado}" alt="Michicito Esperando" />
        <p class="Aplicacion-texto">Michicita, ¿sabías que hoy es un día muy especial? Me encantaría contarte por qué. ¿Te gustaría saberlo?</p>
        <button class="Aplicacion-boton aceptar" onclick="manejarAceptacion(); reproducirMusica()">Sí</button>
        <button class="Aplicacion-boton rechazar" onclick="manejarRechazo()">${textoNoBoton}</button>
      </div>
    `;
  } else {
    // Mostrar mensaje inicial si la propuesta no ha sido aceptada ni rechazada
    cuerpoApp.innerHTML = `
      <div class="Aplicacion-cuerpo">
        <h1>Te Amo Michicita</h1>
        <img class="Aplicacion-gif" src="${gifFloroso}" alt="Te Amo Michicita" />
        <p class="Aplicacion-texto">Michicita, ¿sabías que hoy es un día muy especial? Me encantaría contarte por qué. ¿Te gustaría saberlo?</p>
        <button class="Aplicacion-boton aceptar" onclick="manejarAceptacion(); reproducirMusica()">Sí</button>
        <button class="Aplicacion-boton rechazar" onclick="manejarRechazo()">${textoNoBoton}</button>
      </div>
    `;
  }
}

// Inicializar la interfaz de usuario cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
  actualizarInterfaz();
});
