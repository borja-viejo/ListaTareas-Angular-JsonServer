module.exports = function () {
  var data = {
    tareas: [
      {
        id: 1,
        texto: "Hacer la compra",
        fecha: "20/11/2021",
        hora: "10:00",
        recordatorio: true
      },
      {
        id: 2,
        texto: "Preparar presentación Angular",
        fecha: "26/11/2021",
        hora: "08:00",
        recordatorio: true
      },
      {
        id: 3,
        texto: "Reunión en la Oficina",
        fecha: "16/12/2021",
        hora: "15:45",
        recordatorio: false
      },
      {
        id: 4,
        texto: "Revisión del Coche",
        fecha: "20/12/2021",
        hora: "18:30",
        recordatorio: false
      }
    ]
  }

  return data
}
