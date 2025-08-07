const tabla = document.getElementById("tablaCitas");
const form = document.getElementById("formCita");

async function cargarCitas() {
  const res = await fetch("http://localhost:3000/citas");
  const citas = await res.json();

  tabla.innerHTML = "";
  citas.forEach(cita => {
    tabla.innerHTML += `
      <tr>
        <td>${cita.id}</td>
        <td>${cita.paciente}</td>
        <td>${cita.medico}</td>
        <td>${new Date(cita.fecha).toLocaleString()}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="eliminarCita(${cita.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

form.addEventListener("submit", async e => {
  e.preventDefault();

  const nuevaCita = {
    paciente: document.getElementById("paciente").value,
    medico: document.getElementById("medico").value,
    fecha: document.getElementById("fechaHora").value,
  };

  await fetch("http://localhost:3000/citas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevaCita)
  });

  form.reset();
  cargarCitas();
});

async function eliminarCita(id) {
  await fetch(`http://localhost:3000/citas/${id}`, { method: "DELETE" });
  cargarCitas();
}

cargarCitas();
