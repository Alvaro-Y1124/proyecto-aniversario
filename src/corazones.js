// CONFIGURACIÓN INTERNA - CAMBIOS MÓVIL: Valores optimizados para dispositivos móviles

// CAMBIO MÓVIL: Intervalo aumentado para mejor rendimiento en móvil
const HEART_SPAWN_INTERVAL = 1200;

// CAMBIO MÓVIL: Menos corazones por spawn para evitar sobrecarga
const HEARTS_PER_SPAWN = 4;

// CAMBIO MÓVIL: Duraciones ajustadas para móvil
const MIN_DURATION = 5;
const MAX_DURATION = 10;
// Array con todos los colores disponibles para los corazones (MANTENIDO IGUAL)
const colors = ['hot-pink', 'bright-pink', 'light-pink', 'deep-pink', 'coral-pink', 'white-pink'];

// Array con todos los tamaños disponibles para los corazones (MANTENIDO IGUAL)
const sizes = ['small', 'medium', 'large', 'extra-large'];
// CAMBIO MÓVIL: Variable para detectar dispositivos móviles
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// Función que crea un corazón individual
function createHeart() {
    // Crea un nuevo elemento div que será el corazón
    const heart = document.createElement('div');
    
    // Asigna la clase CSS 'heart' al elemento
    heart.className = 'heart';
    
    // CAMBIO MÓVIL: Margen ajustado para pantallas móviles
    const margin = isMobile ? 50 : 100;
    // Posiciona el corazón aleatoriamente en el eje X
    heart.style.left = Math.random() * (window.innerWidth - margin) + 'px';
    
    // Selecciona un color aleatorio del array de colores (MANTENIDO IGUAL)
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heart.classList.add(randomColor);
    
    // CAMBIO MÓVIL: Lógica de distribución de tamaños ajustada para móvil
    const sizeRandom = Math.random();
    let randomSize;
    if (sizeRandom < 0.15) {
        randomSize = 'small';      // 15% probabilidad de ser pequeño (aumentado)
    } else if (sizeRandom < 0.5) {
        randomSize = 'medium';     // 35% probabilidad de ser mediano
    } else if (sizeRandom < 0.85) {
        randomSize = 'large';      // 35% probabilidad de ser grande
    } else {
        randomSize = 'extra-large'; // 15% probabilidad de ser extra grande (reducido)
    }
    heart.classList.add(randomSize);
    
    // CAMBIO MÓVIL: Menos movimiento oscilante en móvil para mejor rendimiento
    if (Math.random() > 0.6) {
        heart.classList.add('sway');
    }
    
    // Calcula una duración aleatoria entre MIN_DURATION y MAX_DURATION
    const duration = Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
    heart.style.animationDuration = duration + 's';
    
    // CAMBIO MÓVIL: Retraso reducido para mejor sincronización
    heart.style.animationDelay = Math.random() * 0.5 + 's';
    
    // Añade el corazón al DOM
    document.body.appendChild(heart);
    
    // Programa la eliminación del corazón después de que termine su animación
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, (duration + 1) * 1000);
}
// Función que crea múltiples corazones con pequeños intervalos entre ellos
function spawnHearts() {
    for (let i = 0; i < HEARTS_PER_SPAWN; i++) {
        // CAMBIO MÓVIL: Intervalo ajustado para móvil
        setTimeout(() => createHeart(), i * 200);
    }
}
// CAMBIO MÓVIL: Función de corazones iniciales ajustada para móvil
function initialHearts() {
    // CAMBIO MÓVIL: Menos corazones iniciales para mejor rendimiento
    const initialCount = isMobile ? 15 : 25;
    for (let i = 0; i < initialCount; i++) {
        setTimeout(() => createHeart(), i * 150);
    }
}
// Event listener que se ejecuta cuando la página termina de cargar
window.addEventListener('load', () => {
    initialHearts();
    setInterval(spawnHearts, HEART_SPAWN_INTERVAL);
});
// CAMBIO MÓVIL: Event listeners para eventos táctiles en dispositivos móviles
if (isMobile) {
    // Evento para toques en pantalla táctil
    document.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Evita comportamientos por defecto del touch
        
        // Obtiene las coordenadas del primer toque
        const touch = e.touches[0];
        createClickHeart(touch.clientX);
    });
} else {
    // Evento para clics en dispositivos de escritorio
    document.addEventListener('click', (e) => {
        createClickHeart(e.clientX);
    });
}
// CAMBIO MÓVIL: Función separada para crear corazones de interacción
function createClickHeart(xPosition) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    heart.style.left = xPosition + 'px';
    heart.style.bottom = '0px';
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heart.classList.add(randomColor);
    
    // CAMBIO MÓVIL: Tamaño ajustado para móvil
    const heartSize = isMobile ? 'medium' : 'large';
    heart.classList.add(heartSize);
    
    // CAMBIO MÓVIL: Menos sway en corazones de interacción móvil
    if (Math.random() > 0.8) {
        heart.classList.add('sway');
    }
    
    // CAMBIO MÓVIL: Duración ajustada para móvil
    const duration = isMobile ? 4 : 5;
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, duration * 1000);
}
// Event listener para manejar cambios de tamaño de ventana y orientación
window.addEventListener('resize', () => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        if (parseFloat(heart.style.left) > window.innerWidth) {
            heart.remove();
        }
    });
});
// CAMBIO MÓVIL: Event listener para cambios de orientación en móvil
window.addEventListener('orientationchange', () => {
    // Espera un poco para que la orientación se complete
    setTimeout(() => {
        // Remueve corazones que estén fuera de la nueva pantalla
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => {
            if (parseFloat(heart.style.left) > window.innerWidth) {
                heart.remove();
            }
        });
    }, 100);
});
// CAMBIO MÓVIL: Previene el zoom accidental en dispositivos móviles
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
// CAMBIO MÓVIL: Previene el comportamiento por defecto del scroll en móvil
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, { passive: false });