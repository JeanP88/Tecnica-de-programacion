

function capturar() {
    // Capturar los datos del formulario
    let nombre = document.getElementById("nombre").value;

    // Crear un elemento para mostrar los datos en el documento
    const resultadosDiv = document.getElementById('resultados');
    const nuevoDato = document.createElement('p');
    nuevoDato.innerHTML = `<strong>Nombre:</strong> ${nombre}`;
    
    // Agregar el nuevo dato al div resultados
    resultadosDiv.appendChild(nuevoDato);
}
