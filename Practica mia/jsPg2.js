window.onload = function() {
    cargarHistorial();
};

function cargarHistorial(historialFiltrado = null, columnaSeleccionada = null) {
    const historial = historialFiltrado || JSON.parse(localStorage.getItem('historialUsuarios')) || [];

    const historialDiv = document.getElementById('historial');
    historialDiv.innerHTML = '';

    if (historial.length > 0) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Crear la fila de encabezados
        const headerRow = document.createElement('tr');
        const headers = ['Nombre', 'Apellidos', 'Edad', 'Contraseña', 'Estudia Carrera', 'Ciudad'];

        headers.forEach(header => {
            if (!columnaSeleccionada || header.toLowerCase() === columnaSeleccionada.toLowerCase()) {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            }
        });
        thead.appendChild(headerRow);

        // Crear las filas de datos
        historial.forEach(usuario => {
            const row = document.createElement('tr');

            headers.forEach(key => {
                if (!columnaSeleccionada || key.toLowerCase() === columnaSeleccionada.toLowerCase()) {
                    const td = document.createElement('td');
                    // Acceder a la propiedad correcta del usuario y mostrarla en la celda
                    if (key === 'Contraseña') {
                        td.textContent = '***'; // Mostrar asteriscos en lugar de la contraseña real
                    } else if (key === 'Estudia Carrera') {
                        td.textContent = usuario['estudiaCarrera'] ? 'Sí' : 'No'; // Mostrar 'Sí' o 'No' según estudie o no
                    } else {
                        td.textContent = usuario[key.toLowerCase()];
                    }
                    row.appendChild(td);
                }
            });

            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        historialDiv.appendChild(table);
    } else {
        historialDiv.innerHTML = '<p>No hay usuarios registrados.</p>';
    }
}

function filtrarHistorial() {
    const columna = document.getElementById('columna').value;
    let valorFiltro = document.getElementById('valorFiltro').value.toLowerCase();
    const historial = JSON.parse(localStorage.getItem('historialUsuarios')) || [];

    let historialFiltrado;

    if (valorFiltro === 'all' || valorFiltro === 'todos') {
        historialFiltrado = historial;
    } else {
        historialFiltrado = historial.filter(usuario => {
            return usuario[columna.toLowerCase()].toString().toLowerCase().includes(valorFiltro);
        });
    }

    cargarHistorial(historialFiltrado, columna);
}

function resetearBusqueda() {
    document.getElementById('columna').value = 'nombre';
    document.getElementById('valorFiltro').value = '';
    cargarHistorial();
}

function resetearHistorial() {
    localStorage.removeItem('historialUsuarios');
    cargarHistorial(); // Actualizar la visualización del historial
}
