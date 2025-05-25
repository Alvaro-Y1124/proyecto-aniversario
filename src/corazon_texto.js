
document.addEventListener('DOMContentLoaded', function () {
    // Array de emojis de flores que se usarán para formar el corazón
    const flores = ["🌺", "🌼", "🌸", "🏵️", "🪷", "💮"];

    // Obtener referencias a los elementos del DOM
    const mensajeCorazon = document.getElementById("mensaje-corazon");
    const mensajePrincipal = document.getElementById('mensaje-principal');

    // Variables para controlar el efecto de máquina de escribir
    let indiceParte = 0;
    let indiceCaracter = 0;
    let elementoActual = null;

    // Función para obtener dimensiones responsive del corazón
    function obtenerDimensionesCorazon() {
        const contenedor = document.getElementById('heart-container');
        const ancho = contenedor.offsetWidth;
        const alto = contenedor.offsetHeight;

        // Escala responsive basada en el tamaño del contenedor
        let escala;
        if (window.innerWidth <= 320) {
            escala = 8;
        } else if (window.innerWidth <= 480) {
            escala = 10;
        } else if (window.innerWidth <= 768) {
            escala = 12;
        } else {
            escala = 18;
        }

        return {
            ancho: ancho,
            alto: alto,
            escala: escala,
            centroX: ancho / 2,
            centroY: alto / 2 - (alto * 0.075) // Ajuste proporcional
        };
    }

    // Función para crear y animar el corazón usando la ecuación paramétrica
    function crearCorazonParametrico() {
        const contenedorCorazon = document.getElementById('heart-container');
        const dimensiones = obtenerDimensionesCorazon();

        // Limpiar cualquier corazón previo
        contenedorCorazon.innerHTML = '';

        const puntos = [];
        const pasos = window.innerWidth <= 480 ? 120 : 180; // Menos puntos en móvil para mejor rendimiento

        // Generar todos los puntos del corazón usando la ecuación paramétrica
        for (let i = 0; i < pasos; i++) {
            const t = (i / pasos) * 2 * Math.PI;

            // Aplicar la ecuación paramétrica del corazón
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

            // Escalar y posicionar el punto en la pantalla
            const xPantalla = dimensiones.centroX + x * dimensiones.escala;
            const yPantalla = dimensiones.centroY - y * dimensiones.escala;

            puntos.push({ x: xPantalla, y: yPantalla });
        }

        // Crear emojis de flores y agregarlos con efecto de máquina de escribir
        puntos.forEach((punto, indice) => {
            const florAleatoria = flores[Math.floor(Math.random() * flores.length)];

            const elementoFlor = document.createElement('div');
            elementoFlor.className = 'heart-emoji';
            elementoFlor.textContent = florAleatoria;
            elementoFlor.style.left = punto.x + 'px';
            elementoFlor.style.top = punto.y + 'px';

            contenedorCorazon.appendChild(elementoFlor);

            // Velocidad de animación responsive
            const velocidad = window.innerWidth <= 480 ? 40 : 60;

            setTimeout(() => {
                elementoFlor.style.opacity = '1';
            }, indice * velocidad);
        });

        // Mostrar el mensaje del corazón después de que aparezcan todas las flores
        const velocidad = window.innerWidth <= 480 ? 40 : 60;
        setTimeout(() => {
            mensajeCorazon.style.display = "inline";
        }, (puntos.length - 1) * velocidad + 100);
    }

    // Función para actualizar el contador de tiempo de amor
    function actualizarContadorAmor() {
        const fechaAmor = new Date('2023-11-25T00:00:00');
        const ahora = new Date();
        const diferencia = ahora - fechaAmor;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Formato responsive para el contador
        let formato;
        if (window.innerWidth <= 480) {
            formato = `${dias}<span class="time">d</span> ${horas}<span class="time">h</span><br>${minutos}<span class="time">m</span> ${segundos}<span class="time">s</span>`;
        } else {
            formato = `${dias}<span class="time">days</span> ${horas}<span class="time">hours</span> ${minutos}<span class="time">minutes</span> ${segundos}<span class="time">seconds</span>`;
        }

        document.getElementById('love-counter').innerHTML =
            '<span class="time-message">' + formato + '</span>';
    }

    // Array que define la estructura del mensaje de código Python
    const mensaje = [
        { type: 'span', class: 'comment', value: '##' },
        { type: 'newline' },
        { type: 'span', class: 'comment', value: '# Para el amor de mi vida:' },
        { type: 'newline' },
        { type: 'span', class: 'comment', value: '##' },
        { type: 'newline' },
        { type: 'text', value: 'def declarar_amor():' },
        { type: 'newline' },
        { type: 'text', value: '    print(' },
        { type: 'span', class: 'str', value: '"Si pudiera elegir un' },
        { type: 'newline' },
        { type: 'span', class: 'str', value: 'lugar seguro, sería a tu lado."' },
        { type: 'text', value: ')' },
        { type: 'newline' },
        { type: 'text', value: '    print(' },
        { type: 'span', class: 'str', value: '"Cuanto más tiempo estoy' },
        { type: 'newline' },
        { type: 'span', class: 'str', value: 'contigo, más te amo."' },
        { type: 'text', value: ')' },
        { type: 'newline' },
        { type: 'span', class: 'comment', value: '# Este texto no refleja todo el amor que ' },
        { type: 'newline' },
        { type: 'span', class: 'comment', value: '##  te tengo por que mi amor por ti es inmenso' },
        { type: 'newline' },
        { type: 'span', class: 'comment', value: '# gracia por estar en mi vida mi princesa Hermosa.' },
        { type: 'newline' },
        { type: 'text', value: '    print(' },
        { type: 'span', class: 'str', value: '"I Love You!' },
        { type: 'span', class: 'emoji', value: '❤️"' },
        { type: 'text', value: ')' },
        { type: 'newline' },
        { type: 'newline' },
        { type: 'text', value: 'declarar_amor()' }
    ];

    // Función que simula el efecto de máquina de escribir
    function maquinaEscribir() {
        if (indiceParte < mensaje.length) {
            const parteActual = mensaje[indiceParte];

            if (parteActual.type === 'newline') {
                mensajePrincipal.appendChild(document.createElement('br'));
                indiceParte++;
                indiceCaracter = 0;

                // Velocidad responsive para la máquina de escribir
                const velocidad = window.innerWidth <= 480 ? 200 : 380;
                setTimeout(maquinaEscribir, velocidad);
            } else {
                if (indiceCaracter === 0) {
                    if (parteActual.type === 'text') {
                        elementoActual = document.createElement('span');
                    } else if (parteActual.type === 'span') {
                        elementoActual = document.createElement('span');
                        elementoActual.className = parteActual.class;
                    }
                    mensajePrincipal.appendChild(elementoActual);
                }

                if (indiceCaracter < parteActual.value.length) {
                    const spanCaracter = document.createElement('span');
                    spanCaracter.classList.add('char');
                    spanCaracter.textContent = parteActual.value[indiceCaracter];
                    elementoActual.appendChild(spanCaracter);

                    indiceCaracter++;

                    // Velocidad responsive para caracteres
                    const velocidad = window.innerWidth <= 480 ? 20 : 40;
                    setTimeout(maquinaEscribir, velocidad);
                } else {
                    indiceParte++;
                    indiceCaracter = 0;

                    // Velocidad responsive entre partes
                    const velocidad = window.innerWidth <= 480 ? 50 : 100;
                    setTimeout(maquinaEscribir, velocidad);
                }
            }
        }
    }

    // Función de debounce para optimizar el resize
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Inicializar la página
    maquinaEscribir();
    crearCorazonParametrico();
    actualizarContadorAmor();
    setInterval(actualizarContadorAmor, 1000);

    // Event listeners optimizados
    const debouncedResize = debounce(() => {
        crearCorazonParametrico();
        actualizarContadorAmor();
    }, 250);

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            crearCorazonParametrico();
            actualizarContadorAmor();
        }, 100);
    });
});