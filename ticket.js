class Ticket {
  constructor(origin, destiny, date) {
    this.ciudadDeOrigen = origin;
    this.ciudadDeDestino = destiny;
    this.fechaDeViaje = date;
  }
}
class Cliente {
  constructor(name, email, pay) {
    this.nombre = name;
    this.email = email;
    this.formaDePago = pay;
  }
}

let capacidadDelBus = 4;

// Componente botón.
var sendData = document.getElementById("enviar");
sendData.addEventListener("click", capturarFormulario);

// Componente Formulario.
var ciudadOrigen = document.getElementById("origen");
var ciudadDestino = document.getElementById("destino");
var fechaDeViaje = document.getElementById("fecha");

// Componente Formulario del Cliente.
var nombreDeCliente = document.getElementById("nombre");
var correoElectronico = document.getElementById("correo");
var suFormaDePago = document.getElementById("pago");

// Logica y captura de datos del formulario
function capturarFormulario() {
  nuevoTicket = new Ticket(
    ciudadOrigen.value,
    ciudadDestino.value,
    fechaDeViaje.value
  );
  clienteRegistrado = new Cliente(
    nombreDeCliente.value,
    correoElectronico.value,
    suFormaDePago.value
  );
  numeroDeTickets.push(1);
  comprandoBoleto()
}

// Tickets comprados

let numeroDeTickets = [];

function comprandoBoleto() {
  if (capacidadDelBus < numeroDeTickets.length) {
    alert("Sorry Ya no hay espacio!!!");
  } else {
    alert(`Gracias! tu número de asiento es ${numeroDeTickets.length}`);
  }
}
