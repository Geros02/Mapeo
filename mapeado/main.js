document.addEventListener('DOMContentLoaded', function() {
    // Mostrar todas las secciones al cargar la página
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(seccion => {
        seccion.style.display = 'block';
    });

    // Manejar el cambio en el selector de sección
    document.getElementById('section-select').addEventListener('change', function() {
        const idSeccionSeleccionada = this.value;

        if (idSeccionSeleccionada) {
            secciones.forEach(seccion => {
                seccion.style.display = seccion.id === idSeccionSeleccionada ? 'block' : 'none';
            });
        } else {
            secciones.forEach(seccion => {
                seccion.style.display = 'block';
            });
        }
    });

    // Actualizar los estados de los botones
    fetch('conexion.php')
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(function(nombre) {
                const estado = data[nombre];
                const boton = document.querySelector(`.button[data-nombre="${nombre}"]`);

                if (boton) {
                    boton.classList.remove('estado-ocupado', 'estado-libre', 'estado-pendiente');
                    boton.classList.add(`estado-${estado}`);
                }
            });
        })
        .catch(error => console.error('Error:', error));
});

    function toggleSize(img) {
            img.classList.toggle("agrandada");
        }