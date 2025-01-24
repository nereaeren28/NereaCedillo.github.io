// Este es un comentario en JavaScript

// Función para cambiar el texto de un elemento
function cambiarTexto() {
    document.getElementById("miTitulo").innerHTML = "¡Texto cambiado con JavaScript!";
}

// Llamamos a la función cuando la página se ha cargado completamente
window.onload = function() {
    cambiarTexto();  // Llama a la función
};
