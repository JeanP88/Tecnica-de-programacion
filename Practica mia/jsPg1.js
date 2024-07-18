 function guardarDatos() {
            const nombre = document.getElementById('nombre').value;
            const apellidos = document.getElementById('apellidos').value;
            const edad = document.getElementById('edad').value;
            const password = document.getElementById('contraseña').value;
            const estudiaCarrera = document.getElementById('EstudiaCarrera').checked ? 'Sí' : 'No';
            const ciudad = document.getElementById('ciudad').value;

            if (nombre && apellidos && edad && password && ciudad) {
                const usuario = {
                    nombre,
                    apellidos,
                    edad,
                    password,
                    estudiaCarrera,
                    ciudad
                };

                // Obtener el historial actual de LocalStorage
                let historial = JSON.parse(localStorage.getItem('historialUsuarios')) || [];

                // Agregar el nuevo usuario al historial
                historial.push(usuario);

                // Guardar el historial actualizado en LocalStorage
                localStorage.setItem('historialUsuarios', JSON.stringify(historial));

                // Limpiar el formulario
                document.getElementById('registroForm').reset();

                alert('Datos guardados correctamente!');
            } else {
                alert('Por favor, complete todos los campos.');
            }
        }



