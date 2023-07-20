function agendarCita() {
    const nombreCliente = document.getElementById("nombre-cliente").value;

    const efecto = document.getElementById("efecto").value;

    const valor = document.getElementById("valor").value;

    const nombreLashista = document.getElementById("nombre-de-lashista").value;

    const fecha = document.getElementById("fecha").value;

  
    const nuevaCita = {
      nombreCliente,
      efecto,
      valor,
      nombreLashista,
      fecha
    };

  
    guardarCita(nuevaCita);

    mostrarCitasAgendadas();

  }
  
  function guardarCita(cita) {

    let citasGuardadas = localStorage.getItem("citas");

    if (!citasGuardadas) {
      citasGuardadas = [];
    } else {
      citasGuardadas = JSON.parse(citasGuardadas);
    }
  


    citasGuardadas.push(cita);

    localStorage.setItem("citas", JSON.stringify(citasGuardadas));

  }
  

  const citasAgregadas = document.getElementById("citas-agregadas");

 
  function mostrarCitas() {

    citasAgregadas.innerHTML = "";
  
    const citas = JSON.parse(localStorage.getItem("citas")) || [];
  
    citas.forEach((cita, index) => {

      const citaDiv = document.createElement("div");
      citaDiv.classList.add("cita");

  
      citaDiv.innerHTML = `

        <p>Nombre del cliente: ${cita.nombreCliente}</p>

        <p>Efecto: ${cita.efecto}</p>

        <p>Valor del efecto: ${cita.valor}</p>

        <p>Nombre de lashista: ${cita.nombreLashista}</p>

        <p>Fecha de realización: ${cita.fecha}</p>

        <button class="eliminar-cita" data-index="${index}">Eliminar Cita</button>
        
      `;
  
      citasAgregadas.appendChild(citaDiv);

    });
  
    
    const botonesEliminar = document.querySelectorAll(".eliminar-cita");


    botonesEliminar.forEach((boton) => {


    boton.addEventListener("click", eliminarCita);


    });
  }
  
  
  function eliminarCita(event) {

    
    const index = event.target.dataset.index;
  
    
    const citas = JSON.parse(localStorage.getItem("citas")) || [];
  
    
    citas.splice(index, 1);
  
    
    localStorage.setItem("citas", JSON.stringify(citas));
  
    
    mostrarCitas();

  }


  
  mostrarCitas();


