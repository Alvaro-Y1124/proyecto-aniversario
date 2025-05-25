// Sincronizar las letras con la canción
let audio = document.querySelector("audio");
let lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
let lyricsData = [
  { text: "♪ Georgia, wrap me up in all your ♪", time: 9 },
  { text: "♪ I want you in my arms ♪", time: 16 },
  { text: "♪ Oh, let me hold you ♪", time: 22 },
  { text: "♪ I'll never let you go again like I did ♪", time: 27 },
  { text: "♪ Oh, I used to say ♪", time: 30 },
  { text: "♪ I would never fall in love again until I found her ♪", time: 35 },
  { text: "♪ I said, I would never fall unless it's you I fall into ♪", time: 42 },
  { text: "♪ I was lost within the darkness, but then I found her ♪", time: 49 },
  { text: "♪ I found you ♪", time: 55 },
  { text: "♪ Georgia pulled me in, I asked to ♪", time: 65 },
  { text: "♪ Love her once again ♪", time: 69 },
  { text: "♪ You fell ♪", time: 73 },
  { text: "♪ I caught you ♪", time: 78},
  { text: "♪ I'll never let you go again like I did ♪", time: 83},
  { text: "♪ Oh, I used to say ♪", time: 87 },
  { text: "♪ I would never fall in love again until I found her ♪", time: 94},
  { text: "♪ I said, I would never fall unless it is you I fall into ♪", time: 99 },
  { text: "♪ I was lost within the darkness, but then I found her ♪", time: 105 },
  { text: "♪ I found you ♪", time: 112},
  { text: "♪ I would never fall in love again until I found her ♪", time: 136 },
  { text: "♪ I said, I would never fall unless it is you I fall into ♪", time: 143 },
  { text: "♪ I was lost within the darkness, but then I found her ♪", time: 149 },
  { text: "♪ I found you ♪", time: 156 },
];

// Animar las letras
function updateLyrics() {
  let time = Math.floor(audio.currentTime);
  let currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    let fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    let opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  let titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 10000);