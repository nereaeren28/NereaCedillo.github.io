// Funcionalidades

// 1. Contador de likes
let likeCount = 0;
document.getElementById('likeButton').addEventListener('click', () => {
    likeCount++;
    document.getElementById('likeCount').textContent = `Likes: ${likeCount}`;
});

// 2. Cambiar color de texto
document.getElementById('colorPicker').addEventListener('input', (event) => {
    document.body.style.color = event.target.value;
});

// 3. Contador de palabras en comentarios
document.getElementById('commentBox').addEventListener('input', () => {
    const words = document.getElementById('commentBox').value.split(/\s+/).filter(Boolean);
    document.getElementById('wordCount').textContent = `Palabras: ${words.length}`;
});

// 4. Mensaje animado
let leftPosition = 0;
const message = document.getElementById('animatedMessage');
setInterval(() => {
    leftPosition += 2;
    if (leftPosition > window.innerWidth) leftPosition = 0;
    message.style.left = `${leftPosition}px`;
}, 10);

// 5. Temporizador
document.getElementById('startTimer').addEventListener('click', () => {
    let time = 10;
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        time--;
        timerElement.textContent = time;
        if (time === 0) {
            clearInterval(interval);
            alert('¡Tiempo terminado!');
        }
    }, 1000);
});

// 6. Invertir el orden de filas de la tabla
document.getElementById('invertOrderButton').addEventListener('click', () => {
    const table = document.getElementById('favoritesTable');
    const rows = Array.from(table.rows).slice(1);
    rows.reverse();
    const tbody = table.getElementsByTagName('tbody')[0];
    rows.forEach(row => tbody.appendChild(row));
});

// 7. Cambiar tamaño de imagen
document.getElementById('increaseSize').addEventListener('click', () => {
    const image = document.getElementById('blogImage');
    image.style.width = `${image.width + 50}px`;
});
document.getElementById('decreaseSize').addEventListener('click', () => {
    const image = document.get
