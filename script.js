// Función para guardar los datos del perfil
document.getElementById('perfilForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;

    alert(`Perfil guardado:\nNombre: ${nombre}\nCorreo: ${email}\nBiografía: ${bio}`);
});

// Función para inscribirse a eventos
function inscribirse(evento) {
    const listaInscripciones = document.getElementById('inscripcionesList');
    const li = document.createElement('li');
    li.textContent = `Te has inscrito al evento: ${evento}`;
    listaInscripciones.appendChild(li);
}
